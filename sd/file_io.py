import json
import os
import random
import re
import time
from datetime import date

import yaml

from PIL.PngImagePlugin import PngInfo
import piexif
import piexif.helper

import shutil

from sd.singleton import singleton

gs = singleton

# should and will be moved to a settings menu in the UI at some point
save_format = [s.lower() for s in gs.defaults.general.save_format.split(':')]
save_lossless = False
save_quality = 100
if save_format[0] == 'png':
    save_ext = 'png'
    save_format = 'png'
elif save_format[0] in ['jpg', 'jpeg']:
    save_quality = int(save_format[1]) if len(save_format) > 1 else 100
    save_ext = 'jpg'
    save_format = 'jpeg'
elif save_format[0] == 'webp':
    save_quality = int(save_format[1]) if len(save_format) > 1 else 100
    save_ext = 'webp'
    save_format = 'webp'
    if save_quality < 0:  # e.g. webp:-100 for lossless mode
        save_lossless = True
        save_quality = abs(save_quality)


def save_sample(image,
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
                save_individual_images):
    filename_i = os.path.join(sample_path_i, filename)

    if gs.defaults.general.save_metadata or write_info_files:
        # toggles differ for txt2img vs. img2img:
        offset = 0 if init_img is None else 2
        toggles = []
        if prompt_matrix:
            toggles.append(0)
        if normalize_prompt_weights:
            toggles.append(1)
        if init_img is not None:
            if uses_loopback:
                toggles.append(2)
            if uses_random_seed_loopback:
                toggles.append(3)
        if save_individual_images:
            toggles.append(2 + offset)
        if save_grid:
            toggles.append(3 + offset)
        if sort_samples:
            toggles.append(4 + offset)
        if write_info_files:
            toggles.append(5 + offset)
        if use_gfpgan:
            toggles.append(6 + offset)
        metadata = \
            dict(
                target="txt2img" if init_img is None else "img2img",
                prompt=prompts[i], ddim_steps=steps, toggles=toggles, sampler_name=sampler_name,
                ddim_eta=ddim_eta, n_iter=n_iter, batch_size=batch_size, cfg_scale=cfg_scale,
                seed=seeds[i], width=width, height=height, normalize_prompt_weights=normalize_prompt_weights)
        # Not yet any use for these, but they bloat up the files:
        # info_dict["init_img"] = init_img
        # info_dict["init_mask"] = init_mask
        if init_img is not None:
            metadata["denoising_strength"] = str(denoising_strength)
            metadata["resize_mode"] = resize_mode

    if write_info_files:
        with open(f"{filename_i}.yaml", "w", encoding="utf8") as f:
            yaml.dump(metadata, f, allow_unicode=True, width=10000)

    if gs.defaults.general.save_metadata:
        # metadata = {
        # 	"SD:prompt": prompts[i],
        # 	"SD:seed": str(seeds[i]),
        # 	"SD:width": str(width),
        # 	"SD:height": str(height),
        # 	"SD:steps": str(steps),
        # 	"SD:cfg_scale": str(cfg_scale),
        # 	"SD:normalize_prompt_weights": str(normalize_prompt_weights),
        # }
        metadata = {"SD:" + k: v for (k, v) in metadata.items()}

        if save_ext == "png":
            mdata = PngInfo()
            for key in metadata:
                mdata.add_text(key, str(metadata[key]))
            image.save(f"{filename_i}.png", pnginfo=mdata)
            save_image(image, f"{filename_i}.png", pnginfo=mdata)
        else:
            if jpg_sample:
                save_jpg_image(image, f"{filename_i}.jpg", quality=save_quality, optimize=True)
            elif save_ext == "webp":
                save_webp_image(image, f"{filename_i}.{save_ext}", f"webp", quality=save_quality,
                                lossless=save_lossless)
            else:
                # not sure what file format this is
                save_image(image, f"{filename_i}.{save_ext}", f"{save_ext}")
            try:
                exif_dict = piexif.load(f"{filename_i}.{save_ext}")
            except:
                exif_dict = {"Exif": dict()}
            exif_dict["Exif"][piexif.ExifIFD.UserComment] = piexif.helper.UserComment.dump(
                json.dumps(metadata), encoding="unicode")
            piexif.insert(piexif.dump(exif_dict), f"{filename_i}.{save_ext}")

    # render the image on the frontend
    # gs[gs.render_mode]["preview_image"].image(image)


def get_output_folder(self, output_path, batch_folder):
    out_path = os.path.join(os.getcwd(), output_path, time.strftime('%Y-%m'), str(date.today().day))
    if batch_folder != "":
        out_path = os.path.join(out_path, batch_folder)
    print(f"Saving animation frames to {out_path}")
    os.makedirs(out_path, exist_ok=True)
    return out_path

def prepare_response_image(src):
    rnd = int(random.randrange(10000000000))
    src_filename = re.match(r'(.*\/)(.*)', src)
    src_filename = src_filename.group(2)
    dst_path = f"www/web/static/img/"
    os.makedirs(dst_path, exist_ok=True)
    #copy file to a loocation where webserver can fetch it
    rnd_filename =  str(rnd) + src_filename
    dst = dst_path + rnd_filename
    shutil.copyfile(src, dst)
    #shorten the filename so browser can fetch the file from webserver
    dst = f"/img/" + rnd_filename
    gs.current_images.append(dst)

def prepare_response_video(src):
    rnd = int(random.randrange(10000000000))
    src_filename = re.match(r'(.*\/)(.*)', src)
    src_filename = src_filename.group(2)
    dst_path = f"www/web/static/img/"
    os.makedirs(dst_path, exist_ok=True)
    #copy file to a loocation where webserver can fetch it
    rnd_filename =  str(rnd) + src_filename
    dst = dst_path + rnd_filename
    shutil.copyfile(src, dst)
    #shorten the filename so browser can fetch the file from webserver
    dst = f"/img/" + rnd_filename
    gs.current_video = dst


def save_image(image, filename, pnginfo=None):
    filename = filename.replace('\\', '/')
    path = re.match(r'(.*)(\/.*?)', filename)
    if path:
        path_name = path.group(1)
        print(os.getcwd())
        print(path_name)
        os.makedirs(path_name, exist_ok=True)
        try:
            prepare_response_image(filename)
        except Exception as e:
            print(str(e))
    else:
        print(f'Image {filename} can not be saved')


def save_jpg_image(image, filename, quality=save_quality, optimize=True):
    path = re.match(r'(.*)(\/.*?)', filename)
    if path:
        path_name = path.group(1)
        print(path_name)
        os.makedirs(path_name, exist_ok=True)
        try:
            image.save(filename, quality=quality, optimize=optimize)
            prepare_response_image(filename)
        except Exception as e:
            print(str(e))
    else:
        print(f'Image {filename} can not be saved')


def save_webp_image(image, filename, type=f"webp", quality=save_quality, lossless=save_lossless):
    path = re.match(r'(.*)(\/.*?)', filename)
    if path:
        path_name = path.group(1)
        print(path_name)
        os.makedirs(path_name, exist_ok=True)
        try:
            image.save(filename, type=type, quality=quality, lossless=lossless)
            prepare_response_image(filename)
        except Exception as e:
            print(str(e))
    else:
        print(f'Image {filename} can not be saved')
