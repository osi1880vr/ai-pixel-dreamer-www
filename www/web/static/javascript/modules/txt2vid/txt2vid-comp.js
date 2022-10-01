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

                            view:"template",
                            id:"carousel_template",
                            scroll: true,
                            template: '<div id="container"></div>'


                     }
                ],
                 elementsConfig:{
                     on:{
                       onChange: function(){
                         aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_','')] = this.config.value
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

    load() {

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_basic_settings',

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
                        label: 'Text to Image'
                    }
                ]
            },
            {
                view: "form",
                id: "txt2vid_basic_settings_form",
                height: 900,
                elements: [
                    { view: "slider",
                    id: 'txt2vid_H',
                    labelWidth: 250,
                    type: "alt",
                    label: "Height",
                    value: config.txt2vid.H ,
                    name: "H",
                    min: 1,
                     max: 2048,
                     step: 64,
                     title: webix.template("#value#") },
                    { view: "slider",
                    id: 'txt2vid_W',
                    labelWidth: 250,
                     type: "alt",
                     label: "Width",
                     value: config.txt2vid.W,
                     name: "W",
                     min: 1,
                     max: 2048,
                     step: 64,
                     title: webix.template("#value#") },
                    { view: "slider",
                    id: 'txt2vid_steps',
                    labelWidth: 250,
                    type: "alt",
                     label: "Steps",
                     value: config.txt2vid.steps ,
                      name: "steps",
                      min: 1,
                      max: 200,
                      title: webix.template("#value#") },
                    { view: "slider",
                    id: 'txt2vid_scale',
                    labelWidth: 250,
                    type: "alt",
                    label: "Scale",
                    value: config.txt2vid.scale,
                    name: "scale",
                    min: 1,
                    max: 30,
                    step: 0.2,
                    title: webix.template("#value#") },
                     { view: "slider",
                        id: 'txt2vid_ddim_eta',
                        labelWidth: 250,
                        type: "alt",
                        label: "DDIM ETA",
                        value: config.txt2vid.scale,
                        name: "scale",
                        min: -1,
                        max: +1,
                        step: 0.1,
                        title: webix.template("#value#") },
                    { view: "slider",
                    id: 'txt2vid_n_batch',
                    labelWidth: 250,
                    type: "alt",
                    label: "Batch Count",
                    value: config.txt2vid.scale,
                    name: "scale",
                    min: -1,
                    max: +1,
                    step: 0.1,
                    title: webix.template("#value#") },

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


                    {
                        view: "text",
                        id: 'txt2vid_variant_seed',
                        labelWidth: 250,
                        value: config.txt2vid.variant_seed,
                        label: "Variant Seed"
                    },
                    { view: "slider", labelWidth: 250, id: "txt2vid_variant_amount", type: "alt", label: "Variant Amount", value: config.txt2vid.variant_amount, name: "scale", min: 1, max: 30, step: 0.1, title: webix.template("#value#") },

                ],
                 elementsConfig:{
                     on:{
                       onChange: function(){
                         aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_','')] = this.config.value
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

    load() {

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_prompt_help',

    $init(config) {
        config.id = 'right-content';
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2vid_input',
                view: "datatable",
                editable: true,
                columns: [
                    { id: "title", header: "Name", width: 200 },
                    { id: "value", header: "Value", fillspace: true },
                ],
                data: [



                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent() {

        this.load()
    },

    load() {

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_sampler',

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
                        label: 'Text to Image'
                    }
                ]
            },


            {
                view: "form",
                id: "txt2vid_sampler_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2vid_save_samples',
                        labelWidth: 0,
                        labelRight: "Save Samples",
                        value: config.txt2vid.save_as_jpg,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_save_settings',
                        labelWidth: 0,
                        labelRight: "Save Settings",
                        value: config.txt2vid.write_info_files,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_display_samples',
                        labelWidth: 0,
                        labelRight: "Display Samples",
                        value: config.txt2vid.group_by_prompt,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_make_grid',
                        labelWidth: 0,
                        labelRight: "Make Grid",
                        value: config.txt2vid.save_individual_images,
                    },
                    {
                        view: "text",
                        id: 'txt2vid_grid_rows',
                        labelWidth: 250,
                        value: config.txt2vid.variant_seed,
                        label: "Grid Rows"
                    },


                    {
                        view: "checkbox",
                        id: 'txt2vid_separate_prompts',
                        labelWidth: 0,
                        labelRight: "Separate Prompts",
                        value: config.txt2vid.separate_prompts,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2vid_normalize_prompt_weights',
                        labelRight: "Normalize Propmt Weights",
                        labelWidth: 0,
                        value: config.txt2vid.normalize_prompt_weights,
                    }
                ],
                 elementsConfig:{
                     on:{
                       onChange: function(){
                         aid.model.settings.attr.txt2vid[this.config.id.replaceAll('txt2vid_','')] = this.config.value
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

    load() {

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2vid_3d',

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
                id: "txt2vid_3d_form",
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
                elementsConfig:{
                    on:{
                      onChange: function(){
                        const name = this.config.id.replaceAll('txt2vid_','')
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
    load() {},


}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_2d_flip',

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
                id: "txt2vid_2d_flip_form",
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
                elementsConfig:{
                    on:{
                      onChange: function(){
                        const name = this.config.id.replaceAll('txt2vid_','')
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
    load() {},


}, webix.ui.layout)

webix.protoUI({
    name: 'txt2vid_frames',

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
                elementsConfig:{
                    on:{
                      onChange: function(){
                        const name = this.config.id.replaceAll('txt2vid_','')
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
    load() {},


}, webix.ui.layout)
