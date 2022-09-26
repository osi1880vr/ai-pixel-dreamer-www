

# other imports
import os
from typing import Union
from io import BytesIO
from ldm.models.diffusion.ddim import DDIMSampler
from ldm.models.diffusion.plms import PLMSSampler


from sd.sd_utils import *
# Temp imports
from sd.singleton import singleton
g_store = singleton


# end of imports
# ---------------------------------------------------------------------------------------------------------------


try:
	# this silences the annoying "Some weights of the model checkpoint were not used when initializing..." message at start.
	from transformers import logging

	logging.set_verbosity_error()
except:
	pass

if os.path.exists(os.path.join(g_store.defaults.general.GFPGAN_dir, "experiments", "pretrained_models","GFPGANv1.3.pth")):
	GFPGAN_available = True
else:
	GFPGAN_available = False

if os.path.exists(os.path.join(g_store.defaults.general.RealESRGAN_dir, "experiments", "pretrained_models",
							   f"{g_store.defaults.general.RealESRGAN_model}.pth")):
	RealESRGAN_available = True
else:
	RealESRGAN_available = False


#

"""
def layoutFunc():
	def_runner = runner()
	with st.form("txt2img-inputs"):
		st.session_state["generation_mode"] = "txt2img"
		g_store.txt2img = {}

		input_col1, generate_col1 = st.columns([10, 1])
		with input_col1:
			# prompt = st.text_area("Input Text","")
			g_store.txt2img["prompt"] = st.text_area("Input Text", "",
																 placeholder="A corgi wearing a top hat as an oil painting.")

			# Every form must have a submit button, the extra blank spaces is a temp way to align it with the input field. Needs to be done in CSS or some other way.
			generate_col1.write("")
			generate_col1.write("")
			generate_button = generate_col1.form_submit_button("Generate")

		# creating the page layout using columns
		col1, col2, col3 = st.columns([1, 2, 1], gap="large")
		with col1:

			g_store.txt2img["W"] = st.slider("Width:", min_value=64, max_value=2048,
														 value=g_store['defaults'].txt2img.W, step=64)
			g_store.txt2img["H"] = st.slider("Height:", min_value=64, max_value=2048,
														 value=g_store['defaults'].txt2img.H, step=64)
			g_store.txt2img["scale"] = st.slider("CFG (Classifier Free Guidance Scale):", min_value=1.0,
															 max_value=30.0,
															 value=g_store['defaults'].txt2img.scale,
															 step=1e-1, format="%.1f",
															 help="How strongly the image should follow the prompt.")

			g_store.txt2img["iterations"] = st.slider("Iterations:", min_value=1, max_value=2048,
																  value=g_store['defaults'].txt2img.iterations,
																  step=1)
			g_store.txt2img["batch_size"] = st.slider("Batchsize:", min_value=1, max_value=50,
																  value=g_store['defaults'].txt2img.batch_size,
																  step=1)

		with col2:
			preview_tab, prompt_tab, rendering_tab, settings_tab, advanced_tab = st.tabs(["Preview",
																						  "Propmpt help",
																						  "Rendering",
																						  "Settings",
																						  "Advanced"])

			with preview_tab:
				# st.write("Image")
				# Image for testing
				# image = Image.open(requests.get("https://icon-library.com/images/image-placeholder-icon/image-placeholder-icon-13.jpg", stream=True).raw).convert('RGB')
				# new_image = image.resize((175, 240))
				# preview_image = st.image(image)

				# create an empty container for the image, progress bar, etc so we can update it later and use session_state to hold them globally.
				g_store.txt2img["preview_image"] = st.empty()

				g_store.txt2img["loading"] = st.empty()

				g_store.txt2img["progress_bar_text"] = st.empty()
				g_store.txt2img["progress_bar"] = st.empty()

				# generate_video = st.empty()
				g_store.txt2img["preview_video"] = st.empty()

				message = st.empty()
			with prompt_tab:
				nsp = parser()
				nsp_keys = nsp.get_nsp_keys()

				inputprompt = st.multiselect('Topics', nsp_keys, key='txt2img_prompts_ms')
				st.text_input(label="Prompt Sample", value=nsp.parse(inputprompt), key='txt2img_prompt_helper')

				g_store.txt2img["prompt_tmp"] = st.text_area("Park your samples here", value='',
																		 key='txt2img_prompt_temp')

			with rendering_tab:
				basic_tab, mask_tab, init_image_tab = st.tabs(["Basic",
													"Mask",
													"Init"
													])
				with basic_tab:
					g_store.txt2img["ddim_eta"] = st.number_input('DDIM ETA',
																			  value=st.session_state[
																				  'defaults'].txt2img.ddim_eta,
																			  step=1e-1, format="%.1f")
					g_store.txt2img["make_grid"] = st.checkbox('Make Grid', value=False)
					g_store.txt2img["grid_rows"] = st.number_input('Hight', value=st.session_state[
						'defaults'].txt2img.grid_rows, step=1)
				with init_image_tab:
					g_store.txt2img["use_init"] = st.checkbox('Use Init', value=False)
					g_store.txt2img["strength"] = st.number_input('Strength',
																			  value=st.session_state[
																				  'defaults'].txt2img.strength,
																			  step=1e-1, format="%.1f")
					g_store.txt2img["strength_0_no_init"] = st.checkbox('Strength 0', value=True,
																					help="Set the strength to 0 automatically when no init image is used")
					g_store.txt2img["init_image"] = st.text_input("Init Image:", value=st.session_state[
						'defaults'].txt2img.init_image, help="The image to be used as init")
				with mask_tab:
					g_store.txt2img["use_mask"] = st.checkbox('Use Mask', value=False)
					g_store.txt2img["invert_mask"] = st.checkbox('Invert Mask', value=False)
					g_store.txt2img["use_alpha_as_mask"] = st.checkbox('Use Alpha as Mask', value=False)
					g_store.txt2img["mask_file"] = st.text_input("Init Image:",
																			 value=st.session_state[
																				 'defaults'].txt2img.mask_file,
																			 help="The Mask to be used")
					g_store.txt2img["mask_brightness_adjust"] = st.number_input('Brightness Adjust',
																							value=st.session_state[
																								'defaults'].txt2img.mask_brightness_adjust,
																							step=1e-1, format="%.1f",
																							help="Adjust the brightness of the mask")
					g_store.txt2img["mask_contrast_adjust"] = st.number_input('Contrast Adjust',
																						  value=st.session_state[
																							  'defaults'].txt2img.mask_contrast_adjust,
																						  step=1e-1, format="%.1f",
																						  help="Adjust the contrast of the mask")

			with settings_tab:
				g_store.txt2img["save_settings"] = st.checkbox('Save Settings', value=True)
				g_store.txt2img["save_samples"] = st.checkbox('Save Samples', value=True)
				g_store.txt2img["display_samples"] = st.checkbox('Display Samples', value=True)
				g_store.txt2img["pathmode"] = st.selectbox('Path Structure', ("subfolders", "root"),
																	   index=st.session_state[
																		   'defaults'].general.default_path_mode_index,
																	   help="subfolders structure will create daily folders plus many subfolders, root will use your outdir as root",
																	   key='pathmode-txt2img')
				g_store.txt2img["outdir"] = st.text_input("Output Folder",
																	  value=g_store.defaults.general.outdir,
																	  help=" Output folder", key='outdir-txt2img')

				g_store.txt2img["filename_format"] = st.selectbox(
					'Filename Format',
					("{timestring}_{index}_{seed}.png", "{timestring}_{index}_{prompt}.png"))

			with advanced_tab:
				g_store.txt2img["separate_prompts"] = st.checkbox("Create Prompt Matrix.",
																			  value=st.session_state[
																				  'defaults'].txt2img.separate_prompts,
																			  help="Separate multiple prompts using the `|` character, and get all combinations of them.")
				g_store.txt2img["normalize_prompt_weights"] = st.checkbox("Normalize Prompt Weights.",
																					  value=st.session_state[
																						  'defaults'].txt2img.normalize_prompt_weights,
																					  help="Ensure the sum of all weights add up to 1.0")
				g_store.txt2img["save_individual_images"] = st.checkbox("Save individual images.",
																					value=st.session_state[
																						'defaults'].txt2img.save_individual_images,
																					help="Save each image generated before any filter or enhancement is applied.")
				g_store.txt2img["group_by_prompt"] = st.checkbox("Group results by prompt",
																			 value=st.session_state[
																				 'defaults'].txt2img.group_by_prompt,
																			 help="Saves all the images with the same prompt into the same folder. When using a prompt matrix each prompt combination will have its own folder.")
				g_store.txt2img["write_info_files"] = st.checkbox("Write Info file", value=st.session_state[
					'defaults'].txt2img.write_info_files,
																			  help="Save a file next to the image with informartion about the generation.")
				g_store.txt2img["save_as_jpg"] = st.checkbox("Save samples as jpg", value=st.session_state[
					'defaults'].txt2img.save_as_jpg, help="Saves the images as jpg instead of png.")

				if GFPGAN_available:
					g_store.txt2img["use_GFPGAN"] = st.checkbox("Use GFPGAN", value=st.session_state[
						'defaults'].txt2img.use_GFPGAN,
																			help="Uses the GFPGAN model to improve faces after the generation. This greatly improve the quality and consistency of faces but uses extra VRAM. Disable if you need the extra VRAM.")
				else:
					g_store.txt2img["use_GFPGAN"] = False

				if RealESRGAN_available:
					g_store.txt2img["use_RealESRGAN"] = st.checkbox("Use RealESRGAN",
																				value=st.session_state[
																					'defaults'].txt2img.use_RealESRGAN,
																				help="Uses the RealESRGAN model to upscale the images after the generation. This greatly improve the quality and lets you have high resolution images but uses extra VRAM. Disable if you need the extra VRAM.")
					g_store.txt2img["RealESRGAN_model"] = st.selectbox("RealESRGAN model",
																				   ["RealESRGAN_x4plus",
																					"RealESRGAN_x4plus_anime_6B"],
																				   index=0)
				else:
					g_store.txt2img["use_RealESRGAN"] = False
					g_store.txt2img["RealESRGAN_model"] = "RealESRGAN_x4plus"

				g_store.txt2img["variant_amount"] = st.slider("Variant Amount:", value=st.session_state[
					'defaults'].txt2img.variant_amount, min_value=0.0, max_value=1.0, step=0.01)
				g_store.txt2img["variant_seed"] = st.text_input("Variant Seed:",
																			value=st.session_state[
																				'defaults'].txt2img.seed,
																			help="The seed to use when generating a variant, if left blank a random seed will be generated.")

			with col3:
				# If we have custom models available on the "models/custom"
				# folder then we show a menu to select which model we want to use, otherwise we use the main model for SD
				# if st.session_state["CustomModel_available"]:
				#    custom_model = st.selectbox("Custom Model:", st.session_state["defaults"].txt2img.custom_models_list,
				#                                index=st.session_state["defaults"].txt2img.custom_models_list.index(st.session_state["defaults"].txt2img.default_model),
				#                                help="Select the model you want to use. This option is only available if you have custom models \
				#                        on your 'models/custom' folder. The model name that will be shown here is the same as the name\
				#                        the file for the model has on said folder, it is recommended to give the .ckpt file a name that \
				#                    will make it easier for you to distinguish it from other models. Default: Stable Diffusion v1.4")
				# else:
				#    custom_model = "CompVis/stable-diffusion-v1-4"

				# st.session_state["weights_path"] = custom_model
				# else:
				# custom_model = "CompVis/stable-diffusion-v1-4"
				# st.session_state["weights_path"] = f"CompVis/{slugify(custom_model.lower())}"

				g_store.txt2img["steps"] = st.number_input('Sample Steps',
																	   value=g_store['defaults'].txt2img.steps,
																	   step=1)
				g_store.txt2img["sampler"] = st.selectbox(
					'Sampler',
					("ddim", "plms", "klms", "dpm2", "dpm2_ancestral", "heun", "euler", "euler_ancestral"),
					help="DDIM and PLMS are for quick results, you can use low sample steps. for the rest go up with the steps maybe start at 50 and raise from there")

				g_store.txt2img["sampling_mode"] = st.selectbox(
					'Sampling Mode',
					('bicubic', 'bilinear', 'nearest'))
				g_store.txt2img["seed_behavior"] = st.selectbox(
					'Seed Behavior',
					("iter", "fixed", "random"))
				g_store.txt2img["seed"] = st.text_input("Seed:",
																	value=g_store['defaults'].txt2img.seed,
																	help=" The seed to use, if left blank a random seed will be generated.")
				# basic_tab, advanced_tab = st.tabs(["Basic", "Advanced"])

				# with basic_tab:
				# summit_on_enter = st.radio("Submit on enter?", ("Yes", "No"), horizontal=True,
				# help="Press the Enter key to summit, when 'No' is selected you can use the Enter key to write multiple lines.")




		if generate_button:
"""
def run_txt2img_json(json):

	output_images = None
	try:
		output_images, seeds, info, stats = txt2img(prompt=json["prompt"],
													ddim_steps=json["steps"],
													sampler_name=json["sampler"],
													realesrgan_model_name=json["realesrgan_model_name"],
													n_iter=json["iterations"],
													batch_size=json["batch_size"],
													cfg_scale=json["scale"],
													seed=json["seed"],
													height=json["H"],
													width=json["W"],
													separate_prompts=json["separate_prompts"],
													normalize_prompt_weights=json["normalize_prompt_weights"] ,
													save_individual_images=json["save_individual_images"],
													save_grid=False,
													group_by_prompt=json["group_by_prompt"],
													save_as_jpg=json["save_as_jpg"],
													use_GFPGAN=json["use_gfpgan"],
													use_RealESRGAN=json["use_realesrgan"],
													RealESRGAN_model=json["realesrgan_model"],
													fp=json['fp'],
													variant_amount=json["variant_amount"],
													variant_seed=json["variant_seed"],
													write_info_files=json["write_info_files"])
	except Exception as e:
		print(e)
	finally:
		return output_images


def run_txt2img():

	g_store.txt2img["keyframes"] = None
	g_store.txt2img["prompt"] = 'a corgi'
	g_store.txt2img["steps"] = 10
	g_store.txt2img["sampler"] = 'klms'
	g_store.txt2img["realesrgan_model_name"] = None
	g_store.txt2img["iterations"] = 1
	g_store.txt2img["batch_size"] = 10
	g_store.txt2img["scale"] = 7.5
	g_store.txt2img["seed"] = ''
	g_store.txt2img["H"] = 512
	g_store.txt2img["W"] = 512
	g_store.txt2img["separate_prompts"] = False
	g_store.txt2img["normalize_prompt_weights"] = True
	g_store.txt2img["save_individual_images"] = True
	g_store.txt2img["group_by_prompt"] = True
	g_store.txt2img["save_as_jpg"] = False
	g_store.txt2img["use_GFPGAN"] = False
	g_store.txt2img["use_RealESRGAN"] = False
	g_store.txt2img["RealESRGAN_model"] = False
	g_store.defaults.general.fp = None
	g_store.txt2img["variant_amount"] = 0.0
	g_store.txt2img["variant_seed"] = ''
	g_store.txt2img["write_info_files"] = True

	g_store.render_mode='txt2img'

	try:
		output_images, seeds, info, stats = txt2img(g_store.txt2img["prompt"],
													g_store.txt2img["steps"],
													g_store.txt2img["sampler"],
													g_store.txt2img["realesrgan_model_name"],
													g_store.txt2img["iterations"],
													g_store.txt2img["batch_size"],
													g_store.txt2img["scale"],
													g_store.txt2img["seed"],
													g_store.txt2img["H"],
													g_store.txt2img["W"],
													g_store.txt2img["separate_prompts"],
													g_store.txt2img["normalize_prompt_weights"] ,
													g_store.txt2img["save_individual_images"],
													False,
													g_store.txt2img["group_by_prompt"],
													g_store.txt2img["save_as_jpg"],
													g_store.txt2img["use_GFPGAN"],
													g_store.txt2img["use_RealESRGAN"],
													g_store.txt2img["RealESRGAN_model"],
													fp=g_store.defaults.general.fp,
													variant_amount=g_store.txt2img["variant_amount"],
													variant_seed=g_store.txt2img["variant_seed"],
													write_info_files=g_store.txt2img["write_info_files"])
	except Exception as e:
		print(e)





