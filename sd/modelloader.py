import streamlit as st
import os
import base64
import sys
from omegaconf import OmegaConf
import torch

from ldm.util import instantiate_from_config

from sd.singleton import singleton
g_store = singleton
g_store.models={}

def load_GFPGAN():
	model_name = 'GFPGANv1.3'
	model_path = os.path.join(g_store.defaults.general.GFPGAN_dir, 'experiments/pretrained_models',
							  model_name + '.pth')
	if not os.path.isfile(model_path):
		raise Exception("GFPGAN model not found at path " + model_path)

	sys.path.append(os.path.abspath(g_store.defaults.general.GFPGAN_dir))
	from gfpgan import GFPGANer

	if g_store.defaults.general.gfpgan_cpu or g_store.defaults.general.extra_models_cpu:
		instance = GFPGANer(model_path=model_path, upscale=1, arch='clean', channel_multiplier=2, bg_upsampler=None,
							device=torch.device('cpu'))
	elif g_store.defaults.general.extra_models_gpu:
		instance = GFPGANer(model_path=model_path, upscale=1, arch='clean', channel_multiplier=2, bg_upsampler=None,
							device=torch.device(f'cuda:{g_store.defaults.general.gfpgan_gpu}'))
	else:
		instance = GFPGANer(model_path=model_path, upscale=1, arch='clean', channel_multiplier=2, bg_upsampler=None,
							device=torch.device(f'cuda:{g_store.defaults.general.gpu}'))
	return instance


def load_RealESRGAN(model_name: str):
	from basicsr.archs.rrdbnet_arch import RRDBNet
	RealESRGAN_models = {
		'RealESRGAN_x4plus': RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=23, num_grow_ch=32, scale=4),
		'RealESRGAN_x4plus_anime_6B': RRDBNet(num_in_ch=3, num_out_ch=3, num_feat=64, num_block=6, num_grow_ch=32,
											  scale=4)
	}

	model_path = os.path.join(g_store.defaults.general.RealESRGAN_dir, 'experiments/pretrained_models',
							  model_name + '.pth')
	if not os.path.exists(
			os.path.join(g_store.defaults.general.RealESRGAN_dir, "experiments", "pretrained_models",
						 f"{model_name}.pth")):
		raise Exception(model_name + ".pth not found at path " + model_path)

	sys.path.append(os.path.abspath(g_store.defaults.general.RealESRGAN_dir))
	from realesrgan import RealESRGANer

	if g_store.defaults.general.esrgan_cpu or g_store.defaults.general.extra_models_cpu:
		instance = RealESRGANer(scale=2, model_path=model_path, model=RealESRGAN_models[model_name], pre_pad=0,
								half=False)  # cpu does not support half
		instance.device = torch.device('cpu')
		instance.model.to('cpu')
	elif g_store.defaults.general.extra_models_gpu:
		instance = RealESRGANer(scale=2, model_path=model_path, model=RealESRGAN_models[model_name], pre_pad=0,
								half=not g_store.defaults.general.no_half,
								device=torch.device(f'cuda:{g_store.defaults.general.esrgan_gpu}'))
	else:
		instance = RealESRGANer(scale=2, model_path=model_path, model=RealESRGAN_models[model_name], pre_pad=0,
								half=not g_store.defaults.general.no_half,
								device=torch.device(f'cuda:{g_store.defaults.general.gpu}'))
	instance.model.name = model_name

	return instance


def load_model_from_config(config, ckpt, verbose=False):
	print(f"Loading model from {ckpt}")

	pl_sd = torch.load(ckpt, map_location="cpu")
	if "global_step" in pl_sd:
		print(f"Global Step: {pl_sd['global_step']}")
	sd = pl_sd["state_dict"]
	model = instantiate_from_config(config.model)
	m, u = model.load_state_dict(sd, strict=False)
	if len(m) > 0 and verbose:
		print("missing keys:")
		print(m)
	if len(u) > 0 and verbose:
		print("unexpected keys:")
		print(u)

	model.cuda()
	model.eval()
	return model


def load_models(continue_prev_run=False, use_GFPGAN=False, use_RealESRGAN=False, RealESRGAN_model="RealESRGAN_x4plus"):
	"""Load the different models. We also reuse the models that are already in memory to speed things up instead of loading them again. """

	print("Loading models.")

	# Generate random run ID
	# Used to link runs linked w/ continue_prev_run which is not yet implemented
	# Use URL and filesystem safe version just in case.
	g_store.run_id = base64.urlsafe_b64encode(
		os.urandom(6)
	).decode("ascii")

	# check what models we want to use and if the they are already loaded.

	if use_GFPGAN:
		if "GFPGAN" in g_store.models:
			print("GFPGAN already loaded")
		else:
			# Load GFPGAN
			if os.path.exists(g_store.defaults.general.GFPGAN_dir):
				try:
					g_store.models["GFPGAN"] = load_GFPGAN()
					print("Loaded GFPGAN")
				except Exception:
					import traceback
					print("Error loading GFPGAN:", file=sys.stderr)
					print(traceback.format_exc(), file=sys.stderr)
	else:
		if "GFPGAN" in g_store.models:
			del g_store.models["GFPGAN"]

	if use_RealESRGAN:
		if "RealESRGAN" in g_store.models and g_store.models["RealESRGAN"].model.name == RealESRGAN_model:
			print("RealESRGAN already loaded")
		else:
			# Load RealESRGAN
			try:
				# We first remove the variable in case it has something there,
				# some errors can load the model incorrectly and leave things in memory.
				del g_store.models["RealESRGAN"]
			except KeyError:
				pass

			if os.path.exists(g_store.defaults.general.RealESRGAN_dir):
				# st.session_state is used for keeping the models in memory across multiple pages or runs.
				g_store.models["RealESRGAN"] = load_RealESRGAN(RealESRGAN_model)
				print("Loaded RealESRGAN with model " + g_store.models["RealESRGAN"].model.name)

	else:
		if "RealESRGAN" in g_store.models:
			del g_store.models["RealESRGAN"]

	if "model" in g_store.models:
		print("Model already loaded")
	else:
		config = OmegaConf.load("configs/stable-diffusion/v1-inference.yaml")
		g_store.models["model"] = load_model_from_config(config, g_store.defaults.general.ckpt)

		g_store.device = torch.device(
			f"cuda:{g_store.defaults.general.gpu}") if torch.cuda.is_available() else torch.device("cpu")
		#g_store.models["model"] = (
		#	g_store.models["model"] if g_store.defaults.general.no_half else g_store.models["model"].half()).to(g_store.device)

		g_store.models["model"].half().to(g_store.device)


		print("Model loaded.")
