const TOOLBAR_ID = 'aid-txt2img-toolbar'
const NODES_CONTENT_ID = 'aid-txt2img-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node) {
        return node ? txt2img.firstChild : { value: null };
    },
    getValue(node) {
        //console.log(txt2img.firstChild.value)
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

        txt2img.onchange = function () {
            console.log('onchange')
            master.filterByAll();
        };
        //txt2img.onclick = webix.html.preventEvent;
    }


};

webix.protoUI({
    name: 'txt2img',

    $init(config) {
        config.id = 'right-content';
        config.txt2img = aid.model.settings.attr.txt2img
        config.general = aid.model.settings.attr.general
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                gravity: 1,
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
                id: "myform1",
                gravity: 15,


                elements: [
                    {
                        view: "text",
                        id: 'txt2img_prompt',
                        labelWidth: 250,
                        value: config.txt2img.prompt,
                        label: "Prompt",
                        placeholder: "a corgi with a raincoat in a thunderstorm"
                    },
                    {
                        view: "button",
                        id: "txt2img_dream",
                        value: "Dream Image",
                        css: "webix_primary",
                        inputWidth: 150,
                        click: function (id, event) {
                            aid.model.txt2img.dream()
                        }
                    },
                    {
                        view: "template",
                        id: "carousel_template",
                        scroll: true,
                        gravity:3,

                        template: '<div id="container"  ></div>'
                    }
                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2img[this.config.id.replaceAll('txt2img_', '')] = this.config.value
                        }
                    }
                }
            },
            {
            view: "template",
            gravity:1,
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
    name: 'txt2img_basic_settings',

    $init(config) {
        config.txt2img = aid.model.settings.attr.txt2img
        config.general = aid.model.settings.attr.general
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
                id: "myform1",
                height: 900,
                elements: [
                    {
                        view: "slider",
                        id: 'txt2img_H',
                        labelWidth: 250,
                        type: "alt",
                        label: "Height",
                        value: config.txt2img.H,
                        name: "H",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2img_W',
                        labelWidth: 250,
                        type: "alt",
                        label: "Width",
                        value: config.txt2img.W,
                        name: "W",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2img_steps',
                        labelWidth: 250,
                        type: "alt",
                        label: "Steps",
                        value: config.txt2img.steps,
                        name: "steps",
                        min: 1,
                        max: 200,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2img_iterations',
                        labelWidth: 250,
                        type: "alt",
                        label: "Iterations",
                        value: config.txt2img.iterations,
                        name: "iterations",
                        min: 1,
                        max: 200,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2img_batch_size',
                        labelWidth: 250,
                        type: "alt",
                        label: "Batch Size",
                        value: config.txt2img.batch_size,
                        name: "batch_size",
                        min: 1,
                        max: 50,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'txt2img_scale',
                        labelWidth: 250,
                        type: "alt",
                        label: "Scale",
                        value: config.txt2img.scale,
                        name: "scale",
                        min: 1,
                        max: 30,
                        step: 0.2,
                        title: webix.template("#value#")
                    },
                    {
                        view: "combo",
                        id: 'txt2img_sampler',
                        label: 'Sampler',
                        labelWidth: 250,
                        value: config.txt2img.sampler,
                        options: config.general.sampler_list
                    },
                    {
                        view: "combo",
                        id: 'txt2img_sampling_mode',
                        labelWidth: 250,
                        label: 'Sampling Mode',
                        value: config.txt2img.sampling_mode,
                        options: config.general.sampling_mode_list,
                    },
                    {
                        view: "text",
                        labelWidth: 250,
                        value: config.txt2img.seed,
                        id: 'txt2img_seed',
                        label: "Seed"
                    },
                    {
                        view: "combo",
                        id: 'txt2img_seed_behavior',
                        labelWidth: 250,
                        label: 'Seed behavior',
                        value: config.txt2img.seed_behavior,
                        options: config.general.seed_behavior_list
                    },
                    {
                        view: "text",
                        id: 'txt2img_variant_seed',
                        labelWidth: 250,
                        value: config.txt2img.variant_seed,
                        label: "Variant Seed"
                    },
                    { view: "slider", labelWidth: 250, id: "txt2img_variant_amount", type: "alt", label: "Variant Amount", value: config.txt2img.variant_amount, name: "scale", min: 1, max: 30, step: 0.1, title: webix.template("#value#") },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2img[this.config.id.replaceAll('txt2img_', '')] = this.config.value
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
    name: 'txt2img_prompt_help',

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
                id: 'txt2img_input',
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
    name: 'txt2img_rendering_basic',

    $init(config) {
        config.id = 'right-content';
        config.txt2img = aid.model.settings.attr.txt2img
        config.general = aid.model.settings.attr.general
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
                id: "myform1",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2img_save_as_jpg',
                        labelWidth: 0,
                        labelRight: "Save as JPG",
                        value: config.txt2img.save_as_jpg,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_write_info_files',
                        labelWidth: 0,
                        labelRight: "Write Info YAML Files",
                        value: config.txt2img.write_info_files,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_group_by_prompt',
                        labelWidth: 0,
                        labelRight: "Group by Prompt",
                        value: config.txt2img.group_by_prompt,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_save_individual_images',
                        labelWidth: 0,
                        labelRight: "Save individual Images",
                        value: config.txt2img.save_individual_images,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_separate_prompts',
                        labelWidth: 0,
                        labelRight: "Separate Prompts",
                        value: config.txt2img.separate_prompts,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_normalize_prompt_weights',
                        labelRight: "Normalize Propmt Weights",
                        labelWidth: 0,
                        value: config.txt2img.normalize_prompt_weights,
                    }
                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.txt2img[this.config.id.replaceAll('txt2img_', '')] = this.config.value
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
    name: 'txt2img_rendering_upscaling',

    $init(config) {
        config.id = 'right-content';
        config.txt2img = aid.model.settings.attr.txt2img
        config.general = aid.model.settings.attr.general
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
                id: "txt2img_upscaling_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'txt2img_use_gfpgan',
                        labelRight: "Use GFPGAN",
                        labelWidth: 0,
                        value: config.txt2img.use_gfpgan,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_use_realesrgan',
                        labelRight: "Use RealESRGAN",
                        labelWidth: 0,
                        value: config.txt2img.use_realesrgan,
                    },

                    {
                        view: "text",
                        id: 'txt2img_realesrgan_model_name',
                        labelWidth: 250,
                        value: config.txt2img.realesrgan_model_name,
                        label: "RealESRGAN Model Name"
                    },

                    {
                        view: "text",
                        id: 'txt2img_realesrgan_model',
                        labelWidth: 250,
                        value: config.txt2img.realesrgan_model,
                        label: "RealESRGAN Model"
                    },
                    {
                        view: "text",
                        id: 'txt2img_fp',
                        labelWidth: 250,
                        value: config.txt2img.fp,
                        label: "FP"
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('txt2img_', '')
                            aid.model.settings.attr.txt2img[name] = this.config.value
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
