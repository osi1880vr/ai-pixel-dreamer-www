const TOOLBAR_ID = 'aid-img2img-toolbar'
const NODES_CONTENT_ID = 'aid-img2img-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node) {
        return node ? img2img.firstChild : { value: null };
    },
    getValue(node) {
        //console.log(img2img.firstChild.value)
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

        img2img.onchange = function () {
            console.log('onchange')
            master.filterByAll();
        };
        //img2img.onclick = webix.html.preventEvent;
    }


};

webix.protoUI({
    name: 'img2img',

    $init(config) {
        config.id = 'right-content';
        config.img2img = aid.model.settings.attr.img2img
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
                        label: 'Image to Image'
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
                        id: 'img2img_prompt',
                        labelWidth: 250,
                        value: config.img2img.prompt,
                        label: "Prompt",
                        placeholder: "a corgi with a raincoat in a thunderstorm"
                    },
                    {
                        view: "button",
                        id: "img2img_dream",
                        value: "Dream Image",
                        css: "webix_primary",
                        inputWidth: 150,
                        click: function (id, event) {
                            aid.model.img2img.dream()
                        }
                    },
                    { type:"header", template:"Drop files below", css:"webix_dark" },
                    { view:"list", id:"mylist", type:"uploader",
                         gravity:3,
                          scroll:false
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
                            aid.model.settings.attr.img2img[this.config.id.replaceAll('img2img_', '')] = this.config.value
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

    console.log('hello')

    webix.ui({
      id:"uploadAPI",
      view:"uploader",
      upload:"/api/v1/imgtoimg/upload_src",
      on:{
        onFileUpload:function(item){
        console.log('upload')
          webix.message("Done");
        }
      },
      link:"mylist",
      apiOnly:true
    });

    $$("uploadAPI").addDropZone( $$("mylist").$view, "Drop files here");

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'img2img_basic_settings',

    $init(config) {
        config.img2img = aid.model.settings.attr.img2img
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
                        id: 'img2img_H',
                        labelWidth: 250,
                        type: "alt",
                        label: "Height",
                        value: config.img2img.H,
                        name: "H",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'img2img_W',
                        labelWidth: 250,
                        type: "alt",
                        label: "Width",
                        value: config.img2img.W,
                        name: "W",
                        min: 1,
                        max: 2048,
                        step: 64,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'img2img_steps',
                        labelWidth: 250,
                        type: "alt",
                        label: "Steps",
                        value: config.img2img.steps,
                        name: "steps",
                        min: 1,
                        max: 200,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'img2img_iterations',
                        labelWidth: 250,
                        type: "alt",
                        label: "Iterations",
                        value: config.img2img.iterations,
                        name: "iterations",
                        min: 1,
                        max: 200,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'img2img_batch_size',
                        labelWidth: 250,
                        type: "alt",
                        label: "Batch Size",
                        value: config.img2img.batch_size,
                        name: "batch_size",
                        min: 1,
                        max: 50,
                        title: webix.template("#value#")
                    },
                    {
                        view: "slider",
                        id: 'img2img_scale',
                        labelWidth: 250,
                        type: "alt",
                        label: "Scale",
                        value: config.img2img.scale,
                        name: "scale",
                        min: 1,
                        max: 30,
                        step: 0.2,
                        title: webix.template("#value#")
                    },
                    {
                        view: "combo",
                        id: 'img2img_sampler',
                        label: 'Sampler',
                        labelWidth: 250,
                        value: config.img2img.sampler,
                        options: config.general.sampler_list
                    },
                    {
                        view: "combo",
                        id: 'img2img_sampling_mode',
                        labelWidth: 250,
                        label: 'Sampling Mode',
                        value: config.img2img.sampling_mode,
                        options: config.general.sampling_mode_list,
                    },
                    {
                        view: "text",
                        labelWidth: 250,
                        value: config.img2img.seed,
                        id: 'img2img_seed',
                        label: "Seed"
                    },
                    {
                        view: "combo",
                        id: 'img2img_seed_behavior',
                        labelWidth: 250,
                        label: 'Seed behavior',
                        value: config.img2img.seed_behavior,
                        options: config.general.seed_behavior_list
                    },
                    {
                        view: "text",
                        id: 'img2img_variant_seed',
                        labelWidth: 250,
                        value: config.img2img.variant_seed,
                        label: "Variant Seed"
                    },
                    { view: "slider", labelWidth: 250, id: "img2img_variant_amount", type: "alt", label: "Variant Amount", value: config.img2img.variant_amount, name: "scale", min: 1, max: 30, step: 0.1, title: webix.template("#value#") },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.img2img[this.config.id.replaceAll('img2img_', '')] = this.config.value
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
    name: 'img2img_rendering_basic',

    $init(config) {
        config.id = 'right-content';
        config.img2img = aid.model.settings.attr.img2img
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
                        id: 'img2img_save_as_jpg',
                        labelWidth: 0,
                        labelRight: "Save as JPG",
                        value: config.img2img.save_as_jpg,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_write_info_files',
                        labelWidth: 0,
                        labelRight: "Write Info YAML Files",
                        value: config.img2img.write_info_files,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_group_by_prompt',
                        labelWidth: 0,
                        labelRight: "Group by Prompt",
                        value: config.img2img.group_by_prompt,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_save_individual_images',
                        labelWidth: 0,
                        labelRight: "Save individual Images",
                        value: config.img2img.save_individual_images,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_separate_prompts',
                        labelWidth: 0,
                        labelRight: "Separate Prompts",
                        value: config.img2img.separate_prompts,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_normalize_prompt_weights',
                        labelRight: "Normalize Propmt Weights",
                        labelWidth: 0,
                        value: config.img2img.normalize_prompt_weights,
                    }
                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.img2img[this.config.id.replaceAll('img2img_', '')] = this.config.value
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
    name: 'img2img_rendering_upscaling',

    $init(config) {
        config.id = 'right-content';
        config.img2img = aid.model.settings.attr.img2img
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
                id: "img2img_upscaling_form",
                height: 900,
                elements: [
                    {
                        view: "checkbox",
                        id: 'img2img_use_gfpgan',
                        labelRight: "Use GFPGAN",
                        labelWidth: 0,
                        value: config.img2img.use_gfpgan,
                    },
                    {
                        view: "checkbox",
                        id: 'img2img_use_realesrgan',
                        labelRight: "Use RealESRGAN",
                        labelWidth: 0,
                        value: config.img2img.use_realesrgan,
                    },

                    {
                        view: "text",
                        id: 'img2img_realesrgan_model_name',
                        labelWidth: 250,
                        value: config.img2img.realesrgan_model_name,
                        label: "RealESRGAN Model Name"
                    },

                    {
                        view: "text",
                        id: 'img2img_realesrgan_model',
                        labelWidth: 250,
                        value: config.img2img.realesrgan_model,
                        label: "RealESRGAN Model"
                    },
                    {
                        view: "text",
                        id: 'img2img_fp',
                        labelWidth: 250,
                        value: config.img2img.fp,
                        label: "FP"
                    },

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            const name = this.config.id.replaceAll('img2img_', '')
                            aid.model.settings.attr.img2img[name] = this.config.value
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
