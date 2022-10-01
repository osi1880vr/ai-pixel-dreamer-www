import datetime
import math
import os
import random
import re
import sys
import time
from contextlib import nullcontext
from pathlib import Path

import k_diffusion as K
import numpy as np
import torch
from PIL import Image, ImageFont, ImageDraw, ImageFilter
from einops import rearrange
from slugify import slugify
from torch import autocast
from tqdm import trange
from sd.modelloader import load_models
from sd.gc_torch import torch_gc
from sd.memory_manager import MemUsageMonitor
from sd.prompt_tools import split_weighted_subprompts
from sd.file_io import save_sample
from sd.callbacks import generation_callback

from sd.singleton import singleton

g_store = singleton

# hardcoded as they never change. At least for now
opt_C = 4
opt_f = 8

#todo: should be moved to a settings menu in the UI
grid_format = [s.lower() for s in g_store.defaults.general.grid_format.split(':')]
grid_lossless = False
grid_quality = 100
if grid_format[0] == 'png':
    grid_ext = 'png'
    grid_format = 'png'
elif grid_format[0] in ['jpg', 'jpeg']:
    grid_quality = int(grid_format[1]) if len(grid_format) > 1 else 100
    grid_ext = 'jpg'
    grid_format = 'jpeg'
elif grid_format[0] == 'webp':
    grid_quality = int(grid_format[1]) if len(grid_format) > 1 else 100
    grid_ext = 'webp'
    grid_format = 'webp'
    if grid_quality < 0:  # e.g. webp:-100 for lossless mode
        grid_lossless = True
        grid_quality = abs(grid_quality)


def load_embeddings(fp):
    if fp is not None and hasattr(g_store.models["model"], "embedding_manager"):
        g_store.models["model"].embedding_manager.load(fp['name'])


def oxlamon_matrix(prompt, seed, n_iter, batch_size):
    pattern = re.compile(r'(,\s){2,}')

    class PromptItem:
        def __init__(self, text, parts, item):
            self.text = text
            self.parts = parts
            if item:
                self.parts.append(item)

    def clean(txt):
        return re.sub(pattern, ', ', txt)

    def getrowcount(txt):
        for data in re.finditer(".*?\\((.*?)\\).*", txt):
            if data:
                return len(data.group(1).split("|"))
            break
        return None

    def repliter(txt):
        for data in re.finditer(".*?\\((.*?)\\).*", txt):
            if data:
                r = data.span(1)
                for item in data.group(1).split("|"):
                    yield (clean(txt[:r[0] - 1] + item.strip() + txt[r[1] + 1:]), item.strip())
            break

    def iterlist(items):
        outitems = []
        for item in items:
            for newitem, newpart in repliter(item.text):
                outitems.append(PromptItem(newitem, item.parts.copy(), newpart))

        return outitems

    def getmatrix(prompt):
        dataitems = [PromptItem(prompt[1:].strip(), [], None)]
        while True:
            newdataitems = iterlist(dataitems)
            if len(newdataitems) == 0:
                return dataitems
            dataitems = newdataitems

    def classToArrays(items, seed, n_iter):
        texts = []
        parts = []
        seeds = []

        for item in items:
            itemseed = seed
            for i in range(n_iter):
                texts.append(item.text)
                parts.append(f"Seed: {itemseed}\n" + "\n".join(item.parts))
                seeds.append(itemseed)
                itemseed += 1

        return seeds, texts, parts

    all_seeds, all_prompts, prompt_matrix_parts = classToArrays(getmatrix(prompt), seed, n_iter)
    n_iter = math.ceil(len(all_prompts) / batch_size)

    needrows = getrowcount(prompt)
    if needrows:
        xrows = math.sqrt(len(all_prompts))
        xrows = round(xrows)
        # if columns is to much
        cols = math.ceil(len(all_prompts) / xrows)
        if cols > needrows * 4:
            needrows *= 2

    return all_seeds, n_iter, prompt_matrix_parts, all_prompts, needrows


def check_prompt_length(prompt, comments):
    """this function tests if prompt is too long, and if so, adds a message to comments"""

    tokenizer = (g_store.models[
                     "model"] if not g_store.defaults.general.optimized else g_store.modelCS).cond_stage_model.tokenizer
    max_length = (g_store.models[
                      "model"] if not g_store.defaults.general.optimized else g_store.modelCS).cond_stage_model.max_length

    info = (g_store.models[
                "model"] if not g_store.defaults.general.optimized else g_store.modelCS).cond_stage_model.tokenizer(
        [prompt],
        truncation=True,
        max_length=max_length,
        return_overflowing_tokens=True,
        padding="max_length",
        return_tensors="pt")
    ovf = info['overflowing_tokens'][0]
    overflowing_count = ovf.shape[0]
    if overflowing_count == 0:
        return

    vocab = {v: k for k, v in tokenizer.get_vocab().items()}
    overflowing_words = [vocab.get(int(x), "") for x in ovf]
    overflowing_text = tokenizer.convert_tokens_to_string(''.join(overflowing_words))

    comments.append(
        f"Warning: too many input tokens; some ({len(overflowing_words)}) have been truncated:\n{overflowing_text}\n")


def create_random_tensors(shape, seeds):
    xs = []
    for seed in seeds:
        torch.manual_seed(seed)

        # randn results depend on device; gpu and cpu get different results for same seed;
        # the way I see it, it's better to do this on CPU, so that everyone gets same result;
        # but the original script had it like this so i do not dare change it for now because
        # it will break everyone's seeds.
        xs.append(torch.randn(shape, device=g_store.defaults.general.gpu))
    x = torch.stack(xs)
    return x


def seed_to_int(s):
    if type(s) is int:
        return s
    if s is None or s == '':
        return random.randint(0, 2 ** 32 - 1)

    if type(s) is list:
        seed_list = []
        for seed in s:
            if seed is None or seed == '':
                seed_list.append(random.randint(0, 2 ** 32 - 1))
            else:
                seed_list = s

        return seed_list

    n = abs(int(s) if s.isdigit() else random.Random(s).randint(0, 2 ** 32 - 1))
    while n >= 2 ** 32:
        n = n >> 32
    return n


def find_noise_for_image(model, device, init_image, prompt, steps=200, cond_scale=2.0, verbose=False, normalize=False,
                         generation_callback=None):
    image = np.array(init_image).astype(np.float32) / 255.0
    image = image[None].transpose(0, 3, 1, 2)
    image = torch.from_numpy(image)
    image = 2. * image - 1.
    image = image.to(device)
    x = model.get_first_stage_encoding(model.encode_first_stage(image))

    uncond = model.get_learned_conditioning([''])
    cond = model.get_learned_conditioning([prompt])

    s_in = x.new_ones([x.shape[0]])
    dnw = K.external.CompVisDenoiser(model)
    sigmas = dnw.get_sigmas(steps).flip(0)

    if verbose:
        print(sigmas)

    for i in trange(1, len(sigmas)):
        x_in = torch.cat([x] * 2)
        sigma_in = torch.cat([sigmas[i - 1] * s_in] * 2)
        cond_in = torch.cat([uncond, cond])

        c_out, c_in = [K.utils.append_dims(k, x_in.ndim) for k in dnw.get_scalings(sigma_in)]

        if i == 1:
            t = dnw.sigma_to_t(torch.cat([sigmas[i] * s_in] * 2))
        else:
            t = dnw.sigma_to_t(sigma_in)

        eps = model.apply_model(x_in * c_in, t, cond=cond_in)
        denoised_uncond, denoised_cond = (x_in + eps * c_out).chunk(2)

        denoised = denoised_uncond + (denoised_cond - denoised_uncond) * cond_scale

        if i == 1:
            d = (x - denoised) / (2 * sigmas[i])
        else:
            d = (x - denoised) / sigmas[i - 1]

        if generation_callback is not None:
            generation_callback(x, i)

        dt = sigmas[i] - sigmas[i - 1]
        x = x + d * dt

    return x / sigmas[-1]


def slerp(device, t, v0: torch.Tensor, v1: torch.Tensor, dot_threshold=0.9995):
    v0 = v0.detach().cpu().numpy()
    v1 = v1.detach().cpu().numpy()

    dot = np.sum(v0 * v1 / (np.linalg.norm(v0) * np.linalg.norm(v1)))
    if np.abs(dot) > dot_threshold:
        v2 = (1 - t) * v0 + t * v1
    else:
        theta_0 = np.arccos(dot)
        sin_theta_0 = np.sin(theta_0)
        theta_t = theta_0 * t
        sin_theta_t = np.sin(theta_t)
        s0 = np.sin(theta_0 - theta_t) / sin_theta_0
        s1 = sin_theta_t / sin_theta_0
        v2 = s0 * v0 + s1 * v1

    v2 = torch.from_numpy(v2).to(device)

    return v2


def get_next_sequence_number(path, prefix=''):
    """
	Determines and returns the next sequence number to use when saving an
	image in the specified directory.

	If a prefix is given, only consider files whose names start with that
	prefix, and strip the prefix from filenames before extracting their
	sequence number.

	The sequence starts at 0.
	"""
    result = -1
    for p in Path(path).iterdir():
        if p.name.endswith(('.png', '.jpg')) and p.name.startswith(prefix):
            tmp = p.name[len(prefix):]
            try:
                result = max(int(tmp.split('-')[0]), result)
            except ValueError:
                pass
    return result + 1


def get_font(fontsize):
    fonts = ["arial.ttf", "DejaVuSans.ttf"]
    for font_name in fonts:
        try:
            return ImageFont.truetype(font_name, fontsize)
        except OSError:
            pass

    # ImageFont.load_default() is practically unusable as it only supports
    # latin1, so raise an exception instead if no usable font was found
    raise Exception(f"No usable font found (tried {', '.join(fonts)})")


def image_grid(imgs, batch_size, force_n_rows=None, captions=None):
    # print (len(imgs))
    if force_n_rows is not None:
        rows = force_n_rows
    elif g_store.defaults.general.n_rows > 0:
        rows = g_store.defaults.general.n_rows
    elif g_store.defaults.general.n_rows == 0:
        rows = batch_size
    else:
        rows = math.sqrt(len(imgs))
        rows = round(rows)

    cols = math.ceil(len(imgs) / rows)

    w, h = imgs[0].size
    grid = Image.new('RGB', size=(cols * w, rows * h), color='black')

    fnt = get_font(30)

    for i, img in enumerate(imgs):
        grid.paste(img, box=(i % cols * w, i // cols * h))
        if captions and i < len(captions):
            d = ImageDraw.Draw(grid)
            size = d.textbbox((0, 0), captions[i], font=fnt, stroke_width=2, align="center")
            d.multiline_text((i % cols * w + w / 2, i // cols * h + h - size[3]), captions[i], font=fnt,
                             fill=(255, 255, 255), stroke_width=2, stroke_fill=(0, 0, 0), anchor="mm", align="center")

    return grid


def draw_prompt_matrix(im, width, height, all_prompts):
    def wrap(text, d, font, line_length):
        lines = ['']
        for word in text.split():
            line = f'{lines[-1]} {word}'.strip()
            if d.textlength(line, font=font) <= line_length:
                lines[-1] = line
            else:
                lines.append(word)
        return '\n'.join(lines)

    def draw_texts(pos, x, y, texts, sizes):
        for i, (text, size) in enumerate(zip(texts, sizes)):
            active = pos & (1 << i) != 0

            if not active:
                text = '\u0336'.join(text) + '\u0336'

            d.multiline_text((x, y + size[1] / 2), text, font=fnt, fill=color_active if active else color_inactive,
                             anchor="mm", align="center")

            y += size[1] + line_spacing

    fontsize = (width + height) // 25
    line_spacing = fontsize // 2
    fnt = get_font(fontsize)
    color_active = (0, 0, 0)
    color_inactive = (153, 153, 153)

    pad_top = height // 4
    pad_left = width * 3 // 4 if len(all_prompts) > 2 else 0

    cols = im.width // width
    rows = im.height // height

    prompts = all_prompts[1:]

    result = Image.new("RGB", (im.width + pad_left, im.height + pad_top), "white")
    result.paste(im, (pad_left, pad_top))

    d = ImageDraw.Draw(result)

    boundary = math.ceil(len(prompts) / 2)
    prompts_horiz = [wrap(x, d, fnt, width) for x in prompts[:boundary]]
    prompts_vert = [wrap(x, d, fnt, pad_left) for x in prompts[boundary:]]

    sizes_hor = [(x[2] - x[0], x[3] - x[1]) for x in [d.multiline_textbbox((0, 0), x, font=fnt) for x in prompts_horiz]]
    sizes_ver = [(x[2] - x[0], x[3] - x[1]) for x in [d.multiline_textbbox((0, 0), x, font=fnt) for x in prompts_vert]]
    hor_text_height = sum([x[1] + line_spacing for x in sizes_hor]) - line_spacing
    ver_text_height = sum([x[1] + line_spacing for x in sizes_ver]) - line_spacing

    for col in range(cols):
        x = pad_left + width * col + width / 2
        y = pad_top / 2 - hor_text_height / 2

        draw_texts(col, x, y, prompts_horiz, sizes_hor)

    for row in range(rows):
        x = pad_left / 2
        y = pad_top + height * row + height / 2 - ver_text_height / 2

        draw_texts(row, x, y, prompts_vert, sizes_ver)

    return result




def process_images(outpath,
                   func_init,
                   func_sample,
                   prompt,
                   seed,
                   sampler_name,
                   save_grid,
                   batch_size,
                   n_iter,
                   steps,
                   cfg_scale,
                   width,
                   height,
                   prompt_matrix,
                   use_gfpgan,
                   use_realesrgan,
                   realesrgan_model_name,
                   fp=None,
                   ddim_eta=0.0,
                   normalize_prompt_weights=True,
                   init_img=None,
                   init_mask=None,
                   mask_blur_strength=3,
                   mask_restore=False,
                   denoising_strength=0.75,
                   noise_mode=0,
                   find_noise_steps=1,
                   resize_mode=None,
                   uses_loopback=False,
                   uses_random_seed_loopback=False,
                   sort_samples=True,
                   write_info_files=True,
                   jpg_sample=False,
                   variant_amount=0.0,
                   variant_seed=None,
                   save_individual_images: bool = True):
    """this is the main loop that both txt2img and img2img use;
       it calls func_init once inside all the scopes and func_sample once per batch"""
    assert prompt is not None
    torch_gc()

    # start time after garbage collection
    start_time = time.time()

    # We will use this date here later for the folder name, need to start_time if not need
    run_start_dt = datetime.datetime.now()

    mem_mon = MemUsageMonitor('MemMon')
    mem_mon.start()

    if hasattr(g_store.models["model"], "embedding_manager"):
        load_embeddings(fp)

    os.makedirs(outpath, exist_ok=True)

    sample_path = os.path.join(outpath, "samples")
    os.makedirs(sample_path, exist_ok=True)

    if not ("|" in prompt) and prompt.startswith("@"):
        prompt = prompt[1:]

    comments = []

    prompt_matrix_parts = []
    simple_templating = False
    add_original_image = not (use_realesrgan or use_gfpgan)

    if prompt_matrix:
        if prompt.startswith("@"):
            simple_templating = True
            add_original_image = not (use_realesrgan or use_gfpgan)
            all_seeds, n_iter, prompt_matrix_parts, all_prompts, frows = oxlamon_matrix(prompt,
                                                                                        seed,
                                                                                        n_iter,
                                                                                        batch_size)
        else:
            all_prompts = []
            prompt_matrix_parts = prompt.split("|")
            combination_count = 2 ** (len(prompt_matrix_parts) - 1)
            for combination_num in range(combination_count):
                current = prompt_matrix_parts[0]

                for n, text in enumerate(prompt_matrix_parts[1:]):
                    if combination_num & (2 ** n) > 0:
                        current += ("" if text.strip().startswith(",") else ", ") + text

                all_prompts.append(current)

            n_iter = math.ceil(len(all_prompts) / batch_size)
            all_seeds = len(all_prompts) * [seed]

        print(f"Prompt matrix will create {len(all_prompts)} images using a total of {n_iter} batches.")
    else:

        if not g_store.defaults.general.no_verify_input:
            try:
                check_prompt_length(prompt, comments)
            except:
                import traceback
                print("Error verifying input:", file=sys.stderr)
                print(traceback.format_exc(), file=sys.stderr)

        all_prompts = batch_size * n_iter * [prompt]
        all_seeds = [seed + x for x in range(len(all_prompts))]

    precision_scope = autocast if g_store.defaults.general.precision == "autocast" else nullcontext
    output_images = []
    grid_captions = []
    stats = []
    with torch.no_grad(), precision_scope("cuda"), (
            g_store.models["model"].ema_scope() if not g_store.defaults.general.optimized else nullcontext()):
        init_data = func_init()
        tic = time.time()

        # if variant_amount > 0.0 create noise from base seed
        base_x = None
        if variant_amount > 0.0:
            target_seed_randomizer = seed_to_int('')  # random seed
            torch.manual_seed(seed)  # this has to be the single starting seed (not per-iteration)
            base_x = create_random_tensors([opt_C, height // opt_f, width // opt_f], seeds=[seed])
            # we don't want all_seeds to be sequential from starting seed with variants,
            # since that makes the same variants each time,
            # so we add target_seed_randomizer as a random offset
            for si in range(len(all_seeds)):
                all_seeds[si] += target_seed_randomizer

        for n in range(n_iter):
            print(f"Iteration: {n + 1}/{n_iter}")
            prompts = all_prompts[n * batch_size:(n + 1) * batch_size]
            captions = prompt_matrix_parts[n * batch_size:(n + 1) * batch_size]
            seeds = all_seeds[n * batch_size:(n + 1) * batch_size]

            print(prompt)

            if g_store.defaults.general.optimized:
                g_store.modelCS.to(g_store.defaults.general.gpu)

            uc = (g_store.models[
                      "model"] if not g_store.defaults.general.optimized else g_store.modelCS).get_learned_conditioning(
                len(prompts) * [""])

            if isinstance(prompts, tuple):
                prompts = list(prompts)

            # split the prompt if it has : for weighting
            # TODO for speed it might help to have this occur when all_prompts filled??
            weighted_subprompts = split_weighted_subprompts(prompts[0], normalize_prompt_weights)

            # sub-prompt weighting used if more than 1
            if len(weighted_subprompts) > 1:
                c = torch.zeros_like(uc)  # i dont know if this is correct.. but it works
                for i in range(0, len(weighted_subprompts)):
                    # note if alpha negative, it functions same as torch.sub
                    c = torch.add(c, (g_store.models[
                                          "model"] if not g_store.defaults.general.optimized else g_store.modelCS).get_learned_conditioning(
                        weighted_subprompts[i][0]), alpha=weighted_subprompts[i][1])
            else:  # just behave like usual
                c = (g_store.models[
                         "model"] if not g_store.defaults.general.optimized else g_store.modelCS).get_learned_conditioning(
                    prompts)

            shape = [opt_C, height // opt_f, width // opt_f]

            if g_store.defaults.general.optimized:
                mem = torch.cuda.memory_allocated() / 1e6
                g_store.modelCS.to("cpu")
                while torch.cuda.memory_allocated() / 1e6 >= mem:
                    time.sleep(1)

            if noise_mode == 1 or noise_mode == 3:
                # TODO params for find_noise_to_image
                x = torch.cat(batch_size * [find_noise_for_image.find_noise_for_image(
                    g_store.models["model"],
                    g_store.device,
                    init_img.convert('RGB'),
                    '',
                    find_noise_steps,
                    0.0,
                    normalize=True,
                    generation_callback=generation_callback,
                )], dim=0)
            else:
                # we manually generate all input noises because each one should have a specific seed
                x = create_random_tensors(shape, seeds=seeds)

            if variant_amount > 0.0:  # we are making variants
                # using variant_seed as sneaky toggle,
                # when not None or '' use the variant_seed
                # otherwise use seeds
                if variant_seed is not None and variant_seed != '':
                    specified_variant_seed = seed_to_int(variant_seed)
                    torch.manual_seed(specified_variant_seed)
                    seeds = [specified_variant_seed]
                # finally, slerp base_x noise to target_x noise for creating a variant
                x = slerp(g_store.defaults.general.gpu, max(0.0, min(1.0, variant_amount)), base_x, x)

            try:
                samples_ddim = func_sample(init_data=init_data,
                                           x=x,
                                           conditioning=c,
                                           unconditional_conditioning=uc,
                                           sampler_name=sampler_name)
            except Exception as e:
                print(e)

            if g_store.defaults.general.optimized:
                g_store.modelFS.to(g_store.defaults.general.gpu)

            x_samples_ddim = (g_store.models[
                                  "model"] if not g_store.defaults.general.optimized else g_store.modelFS).decode_first_stage(
                samples_ddim)
            x_samples_ddim = torch.clamp((x_samples_ddim + 1.0) / 2.0, min=0.0, max=1.0)

            for i, x_sample in enumerate(x_samples_ddim):
                sanitized_prompt = slugify(prompts[i])

                if sort_samples:
                    full_path = os.path.join(os.getcwd(), sample_path, sanitized_prompt)

                    sanitized_prompt = sanitized_prompt[:220 - len(full_path)]
                    sample_path_i = os.path.join(sample_path, sanitized_prompt)

                    os.makedirs(sample_path_i, exist_ok=True)
                    base_count = get_next_sequence_number(sample_path_i)
                    filename = f"{base_count:05}-{steps}_{sampler_name}_{seeds[i]}"
                else:
                    full_path = os.path.join(os.getcwd(), sample_path)
                    sample_path_i = sample_path
                    base_count = get_next_sequence_number(sample_path_i)
                    filename = f"{base_count:05}-{steps}_{sampler_name}_{seeds[i]}_{sanitized_prompt}"[
                               :220 - len(full_path)]  # same as before

                x_sample = 255. * rearrange(x_sample.cpu().numpy(), 'c h w -> h w c')
                x_sample = x_sample.astype(np.uint8)
                image = Image.fromarray(x_sample)
                original_filename = filename

                if use_gfpgan and g_store.models["GFPGAN"] is not None and not use_realesrgan:
                    # skip_save = True # #287 >_>
                    torch_gc()
                    cropped_faces, restored_faces, restored_img = g_store.models["GFPGAN"].enhance(
                        x_sample[:, :, ::-1], has_aligned=False, only_center_face=False, paste_back=True)
                    gfpgan_sample = restored_img[:, :, ::-1]
                    gfpgan_image = Image.fromarray(gfpgan_sample)
                    gfpgan_filename = original_filename + '-gfpgan'

                    save_sample(gfpgan_image,
                                sample_path_i,
                                gfpgan_filename,
                                jpg_sample,
                                prompts,
                                seeds,
                                width,
                                height,
                                steps,
                                cfg_scale,
                                normalize_prompt_weights,
                                use_gfpgan,
                                write_info_files,
                                prompt_matrix,
                                init_img,
                                uses_loopback,
                                uses_random_seed_loopback,
                                save_grid,
                                sort_samples,
                                sampler_name,
                                ddim_eta,
                                n_iter,
                                batch_size,
                                i,
                                denoising_strength,
                                resize_mode,
                                save_individual_images=False)

                    output_images.append(gfpgan_image)  # 287
                    if simple_templating:
                        grid_captions.append(captions[i] + "\ngfpgan")

                if use_realesrgan and g_store.models["RealESRGAN"] is not None and not use_gfpgan:
                    # skip_save = True # #287 >_>
                    torch_gc()

                    if g_store.models["RealESRGAN"].model.name != realesrgan_model_name:
                        # try_loading_RealESRGAN(realesrgan_model_name)
                        load_models(use_GFPGAN=use_gfpgan, use_RealESRGAN=use_realesrgan,
                                    RealESRGAN_model=realesrgan_model_name)

                    output, img_mode = g_store.models["RealESRGAN"].enhance(x_sample[:, :, ::-1])
                    esrgan_filename = original_filename + '-esrgan4x'
                    esrgan_sample = output[:, :, ::-1]
                    esrgan_image = Image.fromarray(esrgan_sample)

                    # save_sample(image, sample_path_i, original_filename, jpg_sample, prompts, seeds, width, height, steps, cfg_scale,
                    # normalize_prompt_weights, use_gfpgan, write_info_files, prompt_matrix, init_img, uses_loopback, uses_random_seed_loopback, skip_save,
                    # save_grid, sort_samples, sampler_name, ddim_eta, n_iter, batch_size, i, denoising_strength, resize_mode)

                    save_sample(esrgan_image,
                                sample_path_i,
                                esrgan_filename,
                                jpg_sample,
                                prompts,
                                seeds,
                                width,
                                height,
                                steps,
                                cfg_scale,
                                normalize_prompt_weights,
                                use_gfpgan,
                                write_info_files,
                                prompt_matrix,
                                init_img,
                                uses_loopback,
                                uses_random_seed_loopback,
                                save_grid,
                                sort_samples,
                                sampler_name,
                                ddim_eta,
                                n_iter,
                                batch_size,
                                i,
                                denoising_strength,
                                resize_mode,
                                save_individual_images=False)

                    output_images.append(esrgan_image)  # 287
                    if simple_templating:
                        grid_captions.append(captions[i] + "\nesrgan")

                if use_realesrgan and g_store.models["RealESRGAN"] is not None and use_gfpgan and g_store.models[
                    "GFPGAN"] is not None:
                    # skip_save = True # #287 >_>
                    torch_gc()
                    cropped_faces, restored_faces, restored_img = g_store.models["GFPGAN"].enhance(
                        x_sample[:, :, ::-1], has_aligned=False, only_center_face=False, paste_back=True)
                    gfpgan_sample = restored_img[:, :, ::-1]

                    if g_store.models["RealESRGAN"].model.name != realesrgan_model_name:
                        # try_loading_RealESRGAN(realesrgan_model_name)
                        load_models(use_GFPGAN=use_gfpgan, use_RealESRGAN=use_realesrgan,
                                    RealESRGAN_model=realesrgan_model_name)

                    output, img_mode = g_store.models["RealESRGAN"].enhance(gfpgan_sample[:, :, ::-1])
                    gfpgan_esrgan_filename = original_filename + '-gfpgan-esrgan4x'
                    gfpgan_esrgan_sample = output[:, :, ::-1]
                    gfpgan_esrgan_image = Image.fromarray(gfpgan_esrgan_sample)

                    save_sample(gfpgan_esrgan_image,
                                sample_path_i,
                                gfpgan_esrgan_filename,
                                jpg_sample,
                                prompts,
                                seeds,
                                width,
                                height,
                                steps,
                                cfg_scale,
                                normalize_prompt_weights,
                                False,
                                write_info_files,
                                prompt_matrix,
                                init_img,
                                uses_loopback,
                                uses_random_seed_loopback,
                                save_grid,
                                sort_samples,
                                sampler_name,
                                ddim_eta,
                                n_iter,
                                batch_size,
                                i,
                                denoising_strength,
                                resize_mode,
                                save_individual_images=False)

                    output_images.append(gfpgan_esrgan_image)  # 287

                    if simple_templating:
                        grid_captions.append(captions[i] + "\ngfpgan_esrgan")

                if mask_restore and init_mask:
                    # init_mask = init_mask if keep_mask else ImageOps.invert(init_mask)
                    init_mask = init_mask.filter(ImageFilter.GaussianBlur(mask_blur_strength))
                    init_mask = init_mask.convert('L')
                    init_img = init_img.convert('RGB')
                    image = image.convert('RGB')

                    if use_realesrgan and g_store.models["RealESRGAN"] is not None:
                        if g_store.models["RealESRGAN"].model.name != realesrgan_model_name:
                            # try_loading_RealESRGAN(realesrgan_model_name)
                            load_models(use_GFPGAN=use_gfpgan, use_RealESRGAN=use_realesrgan,
                                        RealESRGAN_model=realesrgan_model_name)

                        output, img_mode = g_store.models["RealESRGAN"].enhance(np.array(init_img, dtype=np.uint8))
                        init_img = Image.fromarray(output)
                        init_img = init_img.convert('RGB')

                        output, img_mode = g_store.models["RealESRGAN"].enhance(np.array(init_mask, dtype=np.uint8))
                        init_mask = Image.fromarray(output)
                        init_mask = init_mask.convert('L')

                    image = Image.composite(init_img, image, init_mask)

                if save_individual_images:
                    save_sample(image,
                                sample_path_i,
                                filename,
                                jpg_sample,
                                prompts,
                                seeds,
                                width,
                                height,
                                steps,
                                cfg_scale,
                                normalize_prompt_weights,
                                use_gfpgan,
                                write_info_files,
                                prompt_matrix,
                                init_img,
                                uses_loopback,
                                uses_random_seed_loopback,
                                save_grid,
                                sort_samples,
                                sampler_name,
                                ddim_eta,
                                n_iter,
                                batch_size,
                                i,
                                denoising_strength,
                                resize_mode,
                                save_individual_images)

                    if not use_gfpgan or not use_realesrgan:
                        output_images.append(image)

                # if add_original_image or not simple_templating:
                # output_images.append(image)
                # if simple_templating:
                # grid_captions.append( captions[i] )

                if g_store.defaults.general.optimized:
                    mem = torch.cuda.memory_allocated() / 1e6
                    g_store.modelFS.to("cpu")
                    while torch.cuda.memory_allocated() / 1e6 >= mem:
                        time.sleep(1)

        if prompt_matrix or save_grid:
            if prompt_matrix:
                if simple_templating:
                    grid = image_grid(output_images,
                                      n_iter,
                                      force_n_rows=frows,
                                      captions=grid_captions)
                else:
                    grid = image_grid(output_images,
                                      n_iter,
                                      force_n_rows=1 << ((len(prompt_matrix_parts) - 1) // 2))
                    try:
                        grid = draw_prompt_matrix(grid,
                                                  width,
                                                  height,
                                                  prompt_matrix_parts)
                    except:
                        import traceback
                        print("Error creating prompt_matrix text:", file=sys.stderr)
                        print(traceback.format_exc(), file=sys.stderr)
            else:
                grid = image_grid(output_images, batch_size)

            if grid and (batch_size > 1 or n_iter > 1):
                output_images.insert(0, grid)

            grid_count = get_next_sequence_number(outpath, 'grid-')
            grid_file = f"grid-{grid_count:05}-{seed}_{slugify(prompts[i].replace(' ', '_')[:220 - len(full_path)])}.{grid_ext}"
            grid.save(os.path.join(outpath, grid_file), grid_format, quality=grid_quality, lossless=grid_lossless,
                      optimize=True)

        toc = time.time()

    mem_max_used, mem_total = mem_mon.read_and_stop()
    time_diff = time.time() - start_time

    info = f"""
            {prompt}
            Steps: {steps}, Sampler: {sampler_name}, CFG scale: {cfg_scale}, Seed: {seed}{', Denoising strength: ' + str(denoising_strength) if init_img is not None else ''}{', GFPGAN' if use_gfpgan and g_store.models["GFPGAN"] is not None else ''}{', ' + realesrgan_model_name if use_realesrgan and g_store.models["RealESRGAN"] is not None else ''}{', Prompt Matrix Mode.' if prompt_matrix else ''}""".strip()
    stats = f'''
            Took {round(time_diff, 2)}s total ({round(time_diff / (len(all_prompts)), 2)}s per image)
            Peak memory usage: {-(mem_max_used // -1_048_576)} MiB / {-(mem_total // -1_048_576)} MiB / {round(mem_max_used / mem_total * 100, 3)}%'''

    for comment in comments:
        info += "\n\n" + comment

    # mem_mon.stop()
    # del mem_mon
    torch_gc()

    return output_images, seed, info, stats
