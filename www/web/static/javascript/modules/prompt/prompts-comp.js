const TOOLBAR_ID = 'aid-prompts-toolbar'
const NODES_CONTENT_ID = 'aid-prompts-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node) {
        return node ? prompts.firstChild : { value: null };
    },
    getValue(node) {
        //console.log(prompts.firstChild.value)
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

        prompts.onchange = function () {
            console.log('onchange')
            master.filterByAll();
        };
        //prompts.onclick = webix.html.preventEvent;
    }


};

webix.protoUI({
    name: 'ai-prompts',
    $init(config) {
        config.id = 'right-content';
        config.prompts = aid.model.settings.attr.prompts
        config.general = aid.model.settings.attr.general
        config.rows = [
            {
                id: TOOLBAR_ID,
                view: 'toolbar',
                elements: [
                    { width: 7 },
                    {
                        view: 'label',
                        label: 'aiPrompts Dreamer'
                    }
                ]
            },
            {
                view: "form",
                id: "prompts_form",
                gravity:15,


                elements: [
                    {
                        view: "text",
                        id: 'prompts_prompt',
                        labelWidth: 250,
                        value: config.prompts.prompt,
                        label: "Prompt",
                        placeholder: "a corgi with a raincoat in a thunderstorm"
                    },
                    {
                        margin: 5,
                        cols: [
                        {
                            view: "button",
                            id: "prompts_dream",
                            value: "Dream Prompts",
                            css: "webix_primary",
                            inputWidth: 150,
                            click: function (id, event) {
                                aid.model.prompts.dream()
                            }
                        },

                        ]


                    },

                    {

                        view:"textarea",
                        id: "prompts_text",
                        gravity:3,
                        scroll: true,
                       //  readonly:true


                    }

                ],
                elementsConfig: {
                    on: {
                        onChange: function () {
                            aid.model.settings.attr.prompts[this.config.id.replaceAll('prompts_', '')] = this.config.value
                        }
                    }
                }
            },
              {
              view:'template',
              gravity:1
              }

        ];

        this.$ready.push(this.initComponent)
    },
    initComponent() {

        this.load()
    },
    load() { }

}, webix.ui.layout)
