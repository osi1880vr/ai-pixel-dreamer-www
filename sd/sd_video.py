import gc
import os
import random
import sys
import time
from datetime import datetime
from types import SimpleNamespace

import torch
from sd.file_io import prepare_response_video
from sd.deforum import generator
from sd.deforum import video
from sd.file_io import get_output_folder
from sd.singleton import singleton
from sd.gc_torch import torch_gc

gs = singleton


def get_args(json):
    # SimpleNamespace = type(sys.implementation)

    W, H = map(lambda x: x - x % 64, (int(json.W), int(json.H)))  # resize to integer multiple of 64

    now = datetime.now()  # current date and time
    batch_name = now.strftime("%H_%M_%S")
    if gs.defaults.general.default_path_mode == "subfolders":
        out_folder = get_output_folder(gs.defaults.general.outdir_txt2vid, batch_name)
    else:
        out_folder = gs.defaults.general.outdir_txt2vid

    if json.seed == '':
        json.seed = int(random.randrange(0, 4200000000))
    else:
        if json.seed:
            json.seed = int(json.seed)
        else:
            json.seed = int(random.randrange(0, 4200000000))

    try:

        DeforumArgs = {  # 'image': json.preview_image,
            # 'video': json.preview_video,
            'W': W,
            'H': H,
            'seed': json.seed,  # @param
            'sampler': json.sampler,
            # @param .klms","dpm2","dpm2_ancestral","heun","euler","euler_ancestral","plms", "ddim.
            'steps': json.steps,  # @param
            'scale': json.scale,  # @param
            'ddim_eta': json.ddim_eta,  # @param
            'dynamic_threshold': None,
            'static_threshold': None,

            # @markdown **Save & Display Settings**
            'save_samples': json.save_samples,  # @param {type:"boolean"}
            'save_settings': json.save_settings,  # @param {type:"boolean"}
            'display_samples': json.display_samples,  # @param {type:"boolean"}

            # @markdown **Batch Settings**
            'n_batch': json.n_samples,  # @param
            'batch_name': batch_name,  # @param {type:"string"}
            'filename_format': json.filename_format,
            # @param .{timestring}_{index}_{seed}.png","{timestring}_{index}_{prompt}.png.
            'seed_behavior': json.seed_behavior,  # @param .iter","fixed","random.
            'make_grid': json.make_grid,  # @param {type:"boolean"}
            'grid_rows': json.grid_rows,  # @param
            'outdir': out_folder,

            # @markdown **Init Settings**
            'use_init': json.use_init,  # @param {type:"boolean"}
            'strength': json.strength,  # @param {type:"number"}
            'strength_0_no_init': json.strength_0_no_init,
            # Set the strength to 0 automatically when no init image is used
            'init_image': json.init_image,  # @param {type:"string"}
            # Whiter areas of the mask are areas that change more
            'use_mask': json.use_mask,  # @param {type:"boolean"}
            'use_alpha_as_mask': json.use_alpha_as_mask,
            # use the alpha channel of the init image as the mask
            'mask_file': json.mask_file,  # @param {type:"string"}
            'invert_mask': json.invert_mask,  # @param {type:"boolean"}
            # Adjust mask image, 1.0 is no adjustment. Should be positive numbers.
            'mask_brightness_adjust': json.mask_brightness_adjust,  # @param {type:"number"}
            'mask_contrast_adjust': json.mask_contrast_adjust,  # @param {type:"number"}
            'generation_mode': json.generation_mode,
            'n_samples': json.batch_size,
            'keyframes': json.keyframes,
            'prompt': json.prompt,
            'use_gfpgan': json.use_gfpgan,
            'use_realesrgan': json.use_realesrgan,
            'precision': 'autocast',
            'C': 4,
            'f': 8,
            'timestring': "",
            'init_latent': None,
            'init_sample': None,
            'init_c': None,
        }



        if json.generation_mode == "txt2img":
            deforum_anim_args = {
                'animation_mode': None

            }
        else:

            deforum_anim_args = {'animation_mode': json.animation_mode,
                                 # @param .None', '2D', '3D', 'Video Input', 'Interpolation {type:'string'}
                                 'max_frames': json.max_frames,  # @param {type:"number"}
                                 'border': json.border,  # @param .wrap', 'replicate {type:'string'}

                                 # @markdown ####**Motion Parameters:**
                                 'angle': json.angle,  # @param {type:"string"}
                                 'zoom': json.zoom,  # @param {type:"string"}
                                 'translation_x': json.translation_x,  # @param {type:"string"}
                                 'translation_y': json.translation_y,  # @param {type:"string"}
                                 'translation_z': json.translation_z,  # @param {type:"string"}
                                 'rotation_3d_x': json.rotation_3d_x,  # @param {type:"string"}
                                 'rotation_3d_y': json.rotation_3d_y,  # @param {type:"string"}
                                 'rotation_3d_z': json.rotation_3d_z,  # @param {type:"string"}
                                 'noise_schedule': json.noise_schedule,  # @param {type:"string"}
                                 'flip_2d_perspective': json.flip_2d_perspective,  # @param {type:"boolean"}
                                 'perspective_flip_theta': json.perspective_flip_theta,
                                 # @param {type:"string"}
                                 'perspective_flip_phi': json.perspective_flip_phi,  # @param {type:"string"}
                                 'perspective_flip_gamma': json.perspective_flip_gamma,
                                 # @param {type:"string"}
                                 'perspective_flip_fv': json.perspective_flip_fv,  # @param {type:"string"}
                                 'strength_schedule': json.strength_schedule,  # @param {type:"string"}
                                 'contrast_schedule': json.contrast_schedule,  # @param {type:"string"}

                                 # @markdown ####**Coherence:**
                                 'color_coherence': json.color_coherence,
                                 # @param .None', 'Match Frame 0 HSV', 'Match Frame 0 LAB', 'Match Frame 0 RGB {type:'string'}
                                 'diffusion_cadence': json.diffusion_cadence,
                                 # @param .1','2','3','4','5','6','7','8 {type:'string'}

                                 # @markdown ####**3D Depth Warping:**
                                 'use_depth_warping': json.use_depth_warping,  # @param {type:"boolean"}
                                 'midas_weight': json.midas_weight,  # @param {type:"number"}
                                 'near_plane': json.near_plane,
                                 'far_plane': json.far_plane,
                                 'fov': json.fov,  # @param {type:"number"}
                                 'padding_mode': json.padding_mode,
                                 # @param .border', 'reflection', 'zeros {type:'string'}
                                 'sampling_mode': json.sampling_mode,
                                 # @param .bicubic', 'bilinear', 'nearest {type:'string'}
                                 'save_depth_maps': json.save_depth_maps,  # @param {type:"boolean"}

                                 # @markdown ####**Video Input:**
                                 'video_init_path': json.video_init_path,  # @param {type:"string"}
                                 'extract_nth_frame': json.extract_nth_frame,  # @param {type:"number"}

                                 # @markdown ####**Interpolation:**
                                 'interpolate_key_frames': json.interpolate_key_frames,
                                 # @param {type:"boolean"}
                                 'interpolate_x_frames': json.interpolate_x_frames,  # @param {type:"number"}

                                 # @markdown ####**Resume Animation:**
                                 'resume_from_timestring': json.resume_from_timestring,
                                 # @param {type:"boolean"}
                                 'resume_timestring': json.resume_timestring  # @param {type:"string"}

                                 }

        args = SimpleNamespace(**DeforumArgs)
        anim_args = SimpleNamespace(**deforum_anim_args)

        args.timestring = time.strftime('%Y%m%d%H%M%S')
        args.strength = max(0.0, min(1.0, args.strength))

        if args.seed == -1:
            args.seed = random.randint(0, 2 ** 32 - 1)
        if not args.use_init:
            args.init_image = None
        if args.sampler == 'plms' and (args.use_init or anim_args.animation_mode != 'None'):
            print(f"Init images aren't supported with PLMS yet, switching to KLMS")
            args.sampler = 'klms'
        if args.sampler != 'ddim':
            args.ddim_eta = 0

        if anim_args.animation_mode == 'None':
            anim_args.max_frames = 1
        elif anim_args.animation_mode == 'Video Input':
            args.use_init = True
    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
    return args, anim_args


def run_batch(json):
    try:
        args, anim_args = get_args(json)

        # clean up unused memory
        torch_gc()

        models_path = os.path.join(os.getcwd(), 'diffusion', 'models')

        animation_prompts = {
            0: json.prompt,
        }

        # dispatch to appropriate renderer
        if anim_args.animation_mode == '2D' \
                or anim_args.animation_mode == '3D' \
                or anim_args.animation_mode == 'Video Input':

            generator.render_animation(args, anim_args, animation_prompts, models_path)

            # args.outdir = f'{args.outdir}/_anim_stills/{args.batch_name}_{args.firstseed}'
            if gs.defaults.general.pathmode == "subfolders":
                image_path = os.path.join(args.outdir, f"{args.timestring}_%05d.png")
                mp4_path = os.path.join(args.outdir, f"{args.timestring}.mp4")
            else:
                image_path = os.path.join(args.outdir, f"{args.timestring}_%05d.png")
                os.makedirs(os.path.join(args.rootoutdir, "_mp4s"), exist_ok=True)
                mp4_path = os.path.join(args.rootoutdir, f"_mp4s/{args.timestring}_{args.firstseed}.mp4")

            max_frames = anim_args.max_frames
            # json['preview_image'].empty()

            video.produce_video(args, image_path, mp4_path, max_frames)
            prepare_response_video(mp4_path)

        elif anim_args.animation_mode == 'None':

            args.prompts = json.prompt
            args.n_batch = json.iterations
            generator.render_image_batch(args) #, anim_args, animation_prompts, models_path)

            # image_path = os.path.join(args.outdir, f"{args.timestring}_willsanitizeprompt.png")

    except Exception as e:
        exc_type, exc_obj, exc_tb = sys.exc_info()
        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
        print(exc_type, fname, exc_tb.tb_lineno)
        print('error generating args: ' + str(e))
    finally:
        gs.rendering = False



def run_txt2img(json):
    args, anim_args = get_args(json)

    # clean up unused memory
    torch_gc()

    args.prompts = json.prompt
    generator.render_image_batch(args)
