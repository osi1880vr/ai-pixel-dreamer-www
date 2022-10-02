

webix.protoUI({
    name: "mainAlertDialog",

    $init(config) {
        const me = this;
        const labelWidth = 230;

        this.vulModel = config.model

        config.id = 'main-alert-dialog';
        config.modal = true;
        config.position = 'center';
        config.height = 600;
        config.width = 800;
        config.close = true;
        config.head = {
            view:'toolbar',
            cols:[
                { width:4 },
                {
                    view: 'label',
                    label: `FEHLER`,
                    align: 'center',
                    css: 'alert-title'
                },
                { view:'icon', icon:'webix_icon wxi-close', hotkey: 'escape', align: 'right', click() { me.close(); }}
            ]
        };

        config.body = {
            id: 'property-list',
            view: 'datatable',
            editable: false,
            resizeColumn: true,
            //select: 'row',
            headerRowHeight: 0,
            fixedRowHeight: false,
            columns: [
                {id: 'property', header: 'Eigenschaft', width: 120},
                {
                    id: 'value',
                    header: 'Wert',
                    fillspace: true,
                    format(value) {
                        return `<pre style="overflow:scroll;">${value}</pre>`;
                        //return `<div class="${action.class}">${action.text}</div>`;
                    }
                },
            ],
            data: _.map(config.info, (value, key)=> {
                return {
                    property: key,
                    value: value

                }
            })
        }


        this.$ready.push(this.initComponent)
    },

    initComponent(){
        this.$$priorityList = $$('property-list')
        this.$$priorityList.adjustRowHeight("value");
        this.$$priorityList.adjustColumn("value", 'all');
        this.load();
    },

    load(){

    },



}, webix.ui.window)

