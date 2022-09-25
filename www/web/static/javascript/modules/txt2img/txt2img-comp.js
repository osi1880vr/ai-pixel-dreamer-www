const TOOLBAR_ID = 'aid-txt2img-toolbar'
const NODES_CONTENT_ID = 'aid-txt2img-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node){
        return node ? txt2img.firstChild : { value: null};
    },
    getValue(node){
        //console.log(txt2img.firstChild.value)
        return this.getInputNode(node).value;
    },
    setValue(node, value){
        console.log('setValue:',value)
        this.getInputNode(node).value = value;
    },
    refresh(master, node, column){
        console.log('refresh master:',master)
        console.log('refresh node:',node)
        console.log('refresh column:', column)
        master.registerFilter(node, column, this);

        txt2img.onchange = function(){
            console.log('onchange')
            master.filterByAll();
        };
        txt2img.onclick = webix.html.preventEvent;
    },
    render(a, b){
        console.log('render')
        return  `
            <select id="${b.columnId}">
                <option value=''></option>
                <option value='critical 0'>CRITICAL</option>
                <option value='critical 60'>CRITICAL 60</option>
                <option value='critical 90'>CRITICAL 90</option>
            </select>
        `;
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
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:200},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[
                                 { id:"prompt", title:"Prompt", value:'a corgi'},


                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

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
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:200},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[
                                    { id:"H", title:"H", value:512},
                                    { id:"W", title:"W", value:512},
                                    { id:"steps", title:"steps", value:10},
                                    { id:"sampler", title:"sampler", value:'ddim'},
                                    { id:"iterations", title:"iterations", value:1},
                                    { id:"batch_size", title:"batch_size", value:1},
                                    { id:"scale", title:"scale", value:7.5},
                                    { id:"seed", title:"seed", value:null},


                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

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
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:200},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[



                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

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
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:200},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[



                                 { id:"save_as_jpg", title:"save_as_jpg", value:false},
                                 { id:"write_info_files", title:"write_info_files", value:true},
                                 { id:"group_by_prompt", title:"group_by_prompt", value:true},
                                 { id:"save_individual_images", title:"save_individual_images", value:true},



                                 { id:"separate_prompts", title:"separate_prompts", value:false},
                                 { id:"normalize_prompt_weights", title:"normalize_prompt_weights", value:true},





                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2img_rendering_mask',

    $init(config) {
        config.id = 'right-content';
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:200},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[

                                 { id:"realesrgan_model_name", title:"realesrgan_model_name", value:false},
                                 { id:"use_GFPGAN", title:"use_GFPGAN", value:false},
                                 { id:"use_RealESRGAN", title:"use_RealESRGAN", value:false},
                                 { id:"RealESRGAN_model", title:"RealESRGAN_model", value:false},

                                 { id:"fp", title:"fp", value:null},
                                 { id:"variant_amount", title:"variant_amount", value:0.0},
                                 { id:"variant_seed", title:"variant_seed", value:null},
                                 { id:"render_mode", title:"render_mode", value:''}


                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

    }

}, webix.ui.layout)
webix.protoUI({
    name: 'txt2img_rendering_init',

    $init(config) {
        config.id = 'right-content';
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width:7},
                    {
                        view: 'label',
                        label: 'Text to Image'
                    }
                ]
            },
            {
                id: 'txt2img_input',
                view:"datatable",
                editable:true,
                columns: [
                    {id: "title", header:"Name", width:100},
                    {id: "value", header:"Value",fillspace: true},
                ],
                data:[



                ]

            }

        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        this.load()
    },

    load(){

    }

}, webix.ui.layout)
