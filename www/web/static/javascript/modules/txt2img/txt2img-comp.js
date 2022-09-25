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
                        view: "text",
                        id: 'prompt',
                        labelWidth: 250,
                        value: "",
                        label: "Prompt",
                        placeholder: "a corgi with a raincoat in a thunderstorm"
                    },
                    {
                        view: "button",
                        id: "txt2img_dream",
                        value: "Dream",
                        css: "webix_primary",
                        inputWidth: 100,
                        click: function (id, event) {
                            // your code here
                            webix.message("Click on button " + id);
                            // "Click on button btn1"
                        }
                    }
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
    name: 'txt2img_basic_settings',

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
                view: "form",
                id: "myform1",
                height: 900,
                elements: [
                    { view: "slider", id: 'txt2img_height', labelWidth: 250, type: "alt", label: "Height", value: "512", name: "H", min: 1, max: 2048, title: webix.template("#value#") },
                    { view: "slider", id: 'txt2img_width', labelWidth: 250, type: "alt", label: "Width", value: "512", name: "W", min: 1, max: 2048, title: webix.template("#value#") },
                    { view: "slider", id: 'txt2img_steps', labelWidth: 250, type: "alt", label: "Steps", value: "30", name: "steps", min: 1, max: 200, title: webix.template("#value#") },
                    {
                        view: "combo",
                        id: 'txt2img_sampler',
                        label: 'Sampler',
                        labelWidth: 250,
                        value: "ddim",
                        options: ["ddim", "plms", "klms", "dpm2", "dpm2_ancestral", "heun", "euler", "euler_ancestral"]
                    },
                    { view: "slider", id: 'txt2img_interations', labelWidth: 250, type: "alt", label: "Iterations", value: "1", name: "iterations", min: 1, max: 200, title: webix.template("#value#") },
                    { view: "slider", id: 'txt2img_batch_size', labelWidth: 250, type: "alt", label: "Batch Size", value: "1", name: "batch_size", min: 1, max: 50, title: webix.template("#value#") },
                    { view: "slider", id: 'txt2img_scale', labelWidth: 250, type: "alt", label: "Scale", value: "7.5", name: "scale", min: 1, max: 30, step: 0.2, title: webix.template("#value#") },
                    {
                        view: "text",
                        labelWidth: 250,
                        value: "",
                        id: 'txt2img_seed',
                        label: "Seed"
                    },
                    {
                        view: "combo",
                        id: 'txt2img_sampling_mode',
                        labelWidth: 250,
                        label: 'Sampling Mode',
                        value: "bicubic",
                        options: ['bicubic', 'bilinear', 'nearest']
                    },
                    {
                        view: "combo",
                        id: 'txt2img_seed_behavior',
                        labelWidth: 250,
                        label: 'Seed behavior',
                        value: "iter",
                        options: ["iter", "fixed", "random"]
                    },
                    {
                        view: "text",
                        id: 'txt2img_variant_seed',
                        labelWidth: 250,
                        value: "",
                        label: "Variant Seed"
                    },
                    { view: "slider", labelWidth: 250, id: "txt2img_variant_amount", type: "alt", label: "Variant Amount", value: "0.0", name: "scale", min: 1, max: 30, step: 0.1, title: webix.template("#value#") },

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
                        labelWidth: 250,
                        labelRight: "Save as JPG",
                        labelWidth: 0,
                        value: 0,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_write_info_files',
                        labelWidth: 250,
                        labelRight: "Write Info YAML Files",
                        labelWidth: 0,
                        value: 1,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_group_by_prompt',
                        labelWidth: 250,
                        labelRight: "Group by Prompt",
                        labelWidth: 0,
                        value: 1,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_save_individual_images',
                        labelWidth: 250,
                        labelRight: "Save individual Images",
                        labelWidth: 0,
                        value: 1,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_separate_prompts',
                        labelWidth: 250,
                        labelRight: "Separate Prompts",
                        labelWidth: 0,
                        value: 1,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_normalize_prompt_weights',
                        labelWidth: 250,
                        labelRight: "Normalize Propmt Weights",
                        labelWidth: 0,
                        value: 1,
                    }
                ]

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
                        id: 'txt2img_use_GFPGAN',
                        labelWidth: 250,
                        labelRight: "Use GFPGAN",
                        labelWidth: 0,
                        value: 0,
                    },
                    {
                        view: "checkbox",
                        id: 'txt2img_use_RealESRGAN',
                        labelWidth: 250,
                        labelRight: "Use RealESGRAN",
                        labelWidth: 0,
                        value: 0,
                    },

                    {
                        view: "text",
                        id: 'txt2img_realesrgan_model_name',
                        labelWidth: 250,
                        value: "",
                        label: "RealESRGAN Model Name"
                    },

                    {
                        view: "text",
                        id: 'txt2img_RealESRGAN_model',
                        labelWidth: 250,
                        value: "",
                        label: "RealESRGAN Model"
                    },
                    {
                        view: "text",
                        id: 'txt2img_fp',
                        labelWidth: 250,
                        value: "",
                        label: "FP"
                    },

                ],
                elementsConfig:{
                    on:{
                      onChange: function(){
                      aid.model.txt2img.dataload[this.config.id] = this.config.value
                      },
                      onAfterRender: function() {
                        aid.model.txt2img.dataload[this.config.id] = this.config.value
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

