import k_diffusion as K
from sd.callbacks import generation_callback
import torch
import torch.nn as nn
from sd.singleton import singleton
g_store = singleton


class CFGDenoiser(nn.Module):
    def __init__(self, model):
        super().__init__()
        self.inner_model = model

    def forward(self, x, sigma, uncond, cond, cond_scale):
        x_in = torch.cat([x] * 2)
        sigma_in = torch.cat([sigma] * 2)
        cond_in = torch.cat([uncond, cond])
        uncond, cond = self.inner_model(x_in, sigma_in, cond=cond_in).chunk(2)
        return uncond + (cond - uncond) * cond_scale


class KDiffusionSampler:
    def __init__(self, m, sampler):
        self.model = m
        self.model_wrap = K.external.CompVisDenoiser(m)
        self.schedule = sampler

    def get_sampler_name(self):
        return self.schedule

    def sample(self,
               s,
               conditioning,
               batch_size,
               shape,
               verbose,
               unconditional_guidance_scale,
               unconditional_conditioning, eta, x_T, img_callback=None, log_every_t=None):
        sigmas = self.model_wrap.get_sigmas(s)
        x = x_T * sigmas[0]
        model_wrap_cfg = CFGDenoiser(self.model_wrap)
        samples_ddim = None
        samples_ddim = K.sampling.__dict__[f'sample_{self.schedule}'](model_wrap_cfg, x, sigmas,
                                                                      extra_args={'cond': conditioning,
                                                                                  'uncond': unconditional_conditioning,
                                                                                  'cond_scale': unconditional_guidance_scale},
                                                                      disable=False, callback=generation_callback)
        #
        return samples_ddim, None
