const TOOLBAR_ID = 'aid-txt2vid-toolbar'
const NODES_CONTENT_ID = 'aid-txt2vid-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node) {
        return node ? txt2vid.firstChild : { value: null };
    },
    getValue(node) {
        //console.log(txt2vid.firstChild.value)
        return this.getInputNode(node).value;
    },
    setValue(node, value) {
        console.log('setValue:', value)
        this.getInputNode(node).value = value;
    },
    refresh(master, node, column) {
        console.log('refresh master:', master)
        console.log('refresh node:', node)
        console.log('refresh column:', column)
        master.registerFilter(node, column, this);

        txt2vid.onchange = function () {
            console.log('onchange')
            master.filterByAll();
        };
        //txt2vid.onclick = webix.html.preventEvent;
    }


};

webix.protoUI({
    name: 'txt2vid',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_form",
                height: 900,


                elements: [
                    {
                        view: "text",
                        id: 'txt2vid_prompt',
                        labelWidth: 250,
                        value: config.txt2vid.prompt,
                        label: "Prompt",
                        placeholder: "a corgi with a raincoat in a thunderstorm"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_keyframes',
                        labelWidth: 250,
                        value: config.txt2vid.keyframes,
                        label: "Keyframes",
                        placeholder: "Keyframes"
                    },
                    {
                        margin: 5,
                        cols: [
                        {
                            view: "button",
                            id: "txt2vid_dream",
                            value: "Dream",
                            css: "webix_primary",
                            inputWidth: 100,
                            click: function (id, event) {
                                aid.model.txt2vid.dream()
                            }
                        },
                        {
                            view: "button",
                            id: "txt2vid_toggle",
                            value: "Toggle Updates",
                            css: "webix_primary",
                            inputWidth: 150,
                            click: function (id, event) {
                                aid.model.txt2vid.toggle_updates()
                            }
                        },
                        ]


                    },


                    {

                        view: "template",
                        id: "carousel_template",
                        scroll: true,
                        template: '<div id="container"></div>'


                    }
                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_', '')] = this.config.value
                        }
                    }
                }
            }

        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {

        this.load()
    },
    load() { }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_basic_settings_view',
    $init(config) {
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.id = 'right-content';
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video Basic Settings'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_basic_settings_form",
                height: 900,
                elements: [
                    {
                        view: "slider",
                        id: 'txt2vid_H',
                        labelWidth: 250,
                        type: "alt",
                        label: "Height",
                        value: config.txt2vid.H,
                        name: "H",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_W',
                        labelWidth: 250,
                        type: "alt",
                        label: "Width",
                        value: config.txt2vid.W,
                        name: "W",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_steps',
                        labelWidth: 250,
                        type: "alt",
                        label: "Steps",
                        value: config.txt2vid.steps,
                        name: "steps",
                        min: 1,
                        max: 200,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_scale',
                        labelWidth: 250,
                        type: "alt",
                        label: "Scale",
                        value: config.txt2vid.scale,
                        name: "scale",
                        min: 1,
                        max: 30,
                        step: 0.2,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_ddim_eta',
                        labelWidth: 250,
                        type: "alt",
                        label: "DDIM ETA",
                        value: config.txt2vid.scale,
                        name: "ddim_eta",
                        min: -1,
                        max: +1,
                        step: 0.1,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_n_samples',
                        labelWidth: 250,
                        type: "alt",
                        label: "Num Samples",
                        value: config.txt2vid.n_samples,
                        name: "n_samples",
                        min: -1,
                        max: +1,
                        step: 0.1,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2vid_batch_size',
                        labelWidth: 250,
                        type: "alt",
                        label: "Batch Size",
                        value: config.txt2vid.batch_size,
                        name: "batch_size",
                        min: 0,
                        max: 500,
                        step: 1,
                        title: webix.template("#value#")
                    },

                    {
                        view: "combo",
                        id: 'txt2vid_sampler',
                        label: 'Sampler',
                        labelWidth: 250,
                        value: config.txt2vid.sampler,
                        options: config.txt2vid.sampler_list
                    },
                    {
                        view: "text",
                        labelWidth: 250,
                        value: config.txt2vid.seed,
                        id: 'txt2vid_filename_format',
                        label: "Filename Format"
                    },
                    {
                        view: "combo",
                        id: 'txt2vid_seed_behavior',
                        labelWidth: 250,
                        label: 'Seed behavior',
                        value: config.txt2vid.seed_behavior,
                        options: config.txt2vid.seed_behavior_list
                    },

                    {
                        view: "combo",
                        id: 'txt2vid_sampling_mode',
                        labelWidth: 250,
                        label: 'Sampling Mode',
                        value: config.txt2vid.sampling_mode,
                        options: config.txt2vid.sampling_mode_list
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_', '')] = this.config.value
                        }
                    }
                }

            }

        ];
        this.$ready.push(this.initComponent)
    },
    initComponent() {

        this.load()
    },
    load() { }

}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_output_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video Output'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_output_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2vid_save_samples',
                        labelWidth: 0,
                        labelRight: "Save Samples",
                        value: config.txt2vid.save_samples,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_save_settings',
                        labelWidth: 0,
                        labelRight: "Save Settings",
                        value: config.txt2vid.save_settings,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_display_samples',
                        labelWidth: 0,
                        labelRight: "Display Samples",
                        value: config.txt2vid.display_samples,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_make_grid',
                        labelWidth: 0,
                        labelRight: "Make Grid",
                        value: config.txt2vid.make_grid,
                    },
                    {
                        view: "text",
                        id: 'txt2vid_grid_rows',
                        labelWidth: 250,
                        value: config.txt2vid.grid_rows,
                        label: "Grid Rows"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_outdir',
                        labelWidth: 250,
                        value: config.txt2vid.outdir,
                        label: "Output Dir"
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_', '')] = this.config.value
                        }
                    }
                }

            },



        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {

        this.load()
    },
    load() { }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_init_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video Init Image'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_3d_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_init',
                        labelRight: "Use init",
                        labelWidth: 0,
                        value: config.txt2vid.use_init,
                    },
                    {
                        view: "text",
                        id: 'txt2vid_realesrgan_strength',
                        labelWidth: 250,
                        value: config.txt2vid.strength,
                        label: "Strength"
                    },

                    {
                        view: "checkbox",
                        id: 'txt2vid_strength_0_no_init',
                        labelRight: "Strength 0 with no init",
                        labelWidth: 0,
                        value: config.txt2vid.strength_0_no_init,
                    },



                    {
                        view: "text",
                        id: 'txt2vid_init_image',
                        labelWidth: 250,
                        value: config.txt2vid.init_image,
                        label: "Init Image"
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_mask',
                        labelRight: "Use Mask",
                        labelWidth: 0,
                        value: config.txt2vid.use_mask,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_alpha_as_mask',
                        labelRight: "Use Alpha as Mask",
                        labelWidth: 0,
                        value: config.txt2vid.use_alpha_as_mask,
                    },
                    {
                        view: "text",
                        id: 'txt2vid_mask_file',
                        labelWidth: 250,
                        value: config.txt2vid.mask_file,
                        label: "Mask File"
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_invert_mask',
                        labelRight: "Invert Mask",
                        labelWidth: 0,
                        value: config.txt2vid.invert_mask,
                    },
                    {
                        view: "text",
                        id: 'txt2vid_mask_brightness_adjust',
                        labelWidth: 250,
                        value: config.txt2vid.mask_brightness_adjust,
                        label: "Mask brightness adjust"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_mask_contrast_adjust',
                        labelWidth: 250,
                        value: config.txt2vid.mask_file,
                        label: "Mask Contrast Adjust"
                    },









                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {

        this.load()
    },
    load() { },
}, webix.ui.layout)



webix.protoUI({
    name: 'txt2vid_animation_mode_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video Animation Mode'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_3d_form",
                height: 900,
                elements: [

                    {
                        view: "combo",
                        id: 'txt2vid_animation_mode',
                        labelWidth: 250,
                        label: 'Animation Mode',
                        value: config.txt2vid.animation_mode,
                        options: config.txt2vid.animation_mode_list  // todo what 'Interpolation' do ?
                    },
{
                        view: "slider",
                        id: 'txt2vid_max_frames',
                        labelWidth: 250,
                        type: "alt",
                        label: "Max Frames",
                        value: config.txt2vid.max_frames,
                        name: "Max Frames",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "combo",
                        id: 'txt2vid_border',
                        labelWidth: 250,
                        label: 'Border',
                        value: config.txt2vid.border,
                        options: config.txt2vid.border_list
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()

    },
    load() { },
}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_3d_motion_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: '3d Motion setup'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_3d_motion_form",
                height: 900,
                elements: [

                {
                    view: "text",
                    id: 'txt2vid_angle',
                    labelWidth: 250,
                    value: config.txt2vid.angle,
                    label: "Angle"
                },
                {
                    view: "text",
                    id: 'txt2vid_zoom',
                    labelWidth: 250,
                    value: config.txt2vid.zoom,
                    label: "Zoom"
                },
                {
                    view: "text",
                    id: 'txt2vid_angle',
                    labelWidth: 250,
                    value: config.txt2vid.angle,
                    label: "Angle"
                },
                {
                    view: "text",
                    id: 'txt2vid_translation_x',
                    labelWidth: 250,
                    value: config.txt2vid.translation_x,
                    label: "Translation X"
                },
                {
                    view: "text",
                    id: 'txt2vid_translation_y',
                    labelWidth: 250,
                    value: config.txt2vid.translation_y,
                    label: "Translation Y"
                },
                {
                    view: "text",
                    id: 'txt2vid_translation_z',
                    labelWidth: 250,
                    value: config.txt2vid.translation_z,
                    label: "Translation Z"
                },
                {
                    view: "text",
                    id: 'txt2vid_rotation_3d_x',
                    labelWidth: 250,
                    value: config.txt2vid.rotation_3d_x,
                    label: "Rotation 3d X"
                },
                {
                    view: "text",
                    id: 'txt2vid_rotation_3d_y',
                    labelWidth: 250,
                    value: config.txt2vid.rotation_3d_y,
                    label: "Rotation 3d Y"
                },
                {
                    view: "text",
                    id: 'txt2vid_rotation_3d_z',
                    labelWidth: 250,
                    value: config.txt2vid.rotation_3d_z,
                    label: "Rotation 3d Z"
                },
                {
                    view: "text",
                    id: 'txt2vid_noise_schedule',
                    labelWidth: 250,
                    value: config.txt2vid.noise_schedule,
                    label: "Noise Schedule"
                },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()

    },
    load() { },
}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_3d_depth_warping_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: '3d Depth Warping'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_3d_warp_form",
                height: 900,
                elements: [

                    {
                        view: "checkbox",
                        id: 'txt2vid_use_depth_warping',
                        labelRight: "Use Depth Warping",
                        labelWidth: 0,
                        value: config.txt2vid.use_depth_warping,
                    },


                {
                    view: "text",
                    id: 'txt2vid_midas_weight',
                    labelWidth: 250,
                    value: config.txt2vid.midas_weight,
                    label: "Midas Weight"
                },
                {
                    view: "text",
                    id: 'txt2vid_zoom',
                    labelWidth: 250,
                    value: config.txt2vid.zoom,
                    label: "Zoom"
                },
                {
                    view: "text",
                    id: 'txt2vid_near_plane',
                    labelWidth: 250,
                    value: config.txt2vid.near_plane,
                    label: "Near Plane"
                },
                {
                    view: "text",
                    id: 'txt2vid_far_plane',
                    labelWidth: 250,
                    value: config.txt2vid.far_plane,
                    label: "Far Plane X"
                },
                {
                    view: "text",
                    id: 'txt2vid_translation_y',
                    labelWidth: 250,
                    value: config.txt2vid.translation_y,
                    label: "Translation Y"
                },
                {
                    view: "text",
                    id: 'txt2vid_fov',
                    labelWidth: 250,
                    value: config.txt2vid.fov,
                    label: "FOV"
                },
                    {
                        view: "combo",
                        id: 'txt2vid_padding_mode',
                        labelRight: "Padding Mode",
                        labelWidth: 0,
                        value: config.txt2vid.padding_mode_list,
                    },
                    {
                        view: "combo",
                        id: 'txt2vid_sampling_mode',
                        labelRight: "Sampling Mode",
                        labelWidth: 0,
                        value: config.txt2vid.sampling_mode_list,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_save_depth_maps',
                        labelRight: "Save Depth Maps",
                        labelWidth: 0
                    },


                    {
                        view: "checkbox",
                        id: 'txt2vid_resume_from_timestring',
                        labelRight: "Save Depth Maps",
                        labelWidth: 0
                    },


                {
                    view: "text",
                    id: 'txt2vid_resume_timestring',
                    labelWidth: 250,
                    value: config.txt2vid.resume_timestring,
                    label: "Resume Timestring"
                }

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()
    },
    load() { },
}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_2d_flip_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video 2D Flip'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_2d_flip_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2vid_flip_2d_perspective',
                        labelRight: "2d Flip Perspective",
                        labelWidth: 0,
                        value: config.txt2vid.flip_2d_perspective,
                    },

                    {
                        view: "text",
                        id: 'txt2vid_perspective_flip_theta',
                        labelWidth: 250,
                        value: config.txt2vid.perspective_flip_theta,
                        label: "Flip Theta"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_perspective_flip_phi',
                        labelWidth: 250,
                        value: config.txt2vid.perspective_flip_phi,
                        label: "Flip Phi"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_perspective_flip_gamma',
                        labelWidth: 250,
                        value: config.txt2vid.perspective_flip_gamma,
                        label: "Flip Gamma"
                    },

                    {
                        view: "text",
                        id: 'txt2vid_perspective_flip_fv',
                        labelWidth: 250,
                        value: config.txt2vid.perspective_flip_fv,
                        label: "Flip FV"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_strength_schedule',
                        labelWidth: 250,
                        value: config.txt2vid.strength_schedule,
                        label: "Strength Schedule"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_contrast_schedule',
                        labelWidth: 250,
                        value: config.txt2vid.contrast_schedule,
                        label: "Contrast Schedule"
                    },


                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()

    },
    load() { },
}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_Coherence',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Image Upscaling'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_frames_form",
                height: 900,
                elements: [

                    {
                        view: "combo",
                        id: 'txt2vid_color_coherence',
                        labelWidth: 250,
                        label: 'Animation Mode',
                        value: config.txt2vid.color_coherence,
                        options: config.txt2vid.color_coherence_list
                    },
                    {
                        view: "combo",
                        id: 'txt2vid_diffusion_cadence',
                        labelWidth: 250,
                        label: 'Animation Mode',
                        value: config.txt2vid.diffusion_cadence,
                        options: config.txt2vid.diffusion_cadence_list
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()
        console.log('inited')
    },
    load() { },
}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_upscaling_view',
    $init(config) {
        config.id = 'right-content';
        config.txt2vid = aid.model.settings.attr.txt2vid
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Video Upscaling'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_upscaling_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_gfpgan',
                        labelRight: "Use GFPGAN",
                        labelWidth: 0,
                        value: config.txt2vid.use_gfpgan,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_use_realesrgan',
                        labelRight: "Use RealESRGAN",
                        labelWidth: 0,
                        value: config.txt2vid.use_realesrgan,
                    },

                    {
                        view: "text",
                        id: 'txt2vid_realesrgan_model_name',
                        labelWidth: 250,
                        value: config.txt2vid.realesrgan_model_name,
                        label: "RealESRGAN Model Name"
                    },

                    {
                        view: "text",
                        id: 'txt2vid_realesrgan_model',
                        labelWidth: 250,
                        value: config.txt2vid.realesrgan_model,
                        label: "RealESRGAN Model"
                    },
                    {
                        view: "text",
                        id: 'txt2vid_fp',
                        labelWidth: 250,
                        value: config.txt2vid.fp,
                        label: "FP"
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2vid_', '')
                            aid.model.settings.attr.txt2vid[name] = this.config.value
                        }
                    }
                }

            },
        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {
        this.load()
    },
    load() { },
}, webix.ui.layout)
