from sd.singleton import singleton

gs = singleton

import torch


def generation_callback(img, i=0):
    try:
        if i == 0:
            if img['i']: i = img['i']
    except TypeError:
        pass

    if i % int(gs.defaults.general.update_preview_frequency) == 0 and gs.defaults.general.update_preview:
        # print (img)
        # print (type(img))
        # The following lines will convert the tensor we got on img to an actual image we can render on the UI.
        # It can probably be done in a better way for someone who knows what they're doing. I don't.
        # print (img,isinstance(img, torch.Tensor))
        if isinstance(img, torch.Tensor):
            x_samples_ddim = (gs.models["model"] if not
            gs.defaults.general.optimized else gs.modelFS).decode_first_stage(img)
        else:
            # When using the k Diffusion samplers they return a dict instead of a tensor that look like this:
            # {'x': x, 'i': i, 'sigma': sigmas[i], 'sigma_hat': sigmas[i], 'denoised': denoised}
            x_samples_ddim = (gs.models["model"] if not
            gs.defaults.general.optimized else gs.modelFS).decode_first_stage(img["denoised"])

        x_samples_ddim = torch.clamp((x_samples_ddim + 1.0) / 2.0, min=0.0, max=1.0)
