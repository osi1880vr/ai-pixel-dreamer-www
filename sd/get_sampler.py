from ldm.models.diffusion.ddim import DDIMSampler
from ldm.models.diffusion.plms import PLMSSampler
from sd.kdiffusion_sampler import KDiffusionSampler
from sd.singleton import singleton

gs = singleton


def choose_sampler(sampler_name):
    sampler = None
    if sampler_name == 'plms':
        sampler = PLMSSampler(gs.models["model"])
    elif sampler_name == 'ddim':
        sampler = DDIMSampler(gs.models["model"])
    elif sampler_name == 'dpm2_ancestral':
        sampler = KDiffusionSampler(gs.models["model"], 'dpm_2_ancestral')
    elif sampler_name == 'dpm2':
        sampler = KDiffusionSampler(gs.models["model"], 'dpm_2')
    elif sampler_name == 'euler_ancestral':
        sampler = KDiffusionSampler(gs.models["model"], 'euler_ancestral')
    elif sampler_name == 'k_euler':
        sampler = KDiffusionSampler(gs.models["model"], 'euler')
    elif sampler_name == 'heun':
        sampler = KDiffusionSampler(gs.models["model"], 'heun')
    elif sampler_name == 'klms':
        sampler = KDiffusionSampler(gs.models["model"], 'lms')
    else:
        raise Exception("Unknown sampler: " + sampler_name)
    return sampler
