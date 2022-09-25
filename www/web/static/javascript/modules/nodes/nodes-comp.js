const TOOLBAR_ID = 'aid-nodes-toolbar'
const NODES_CONTENT_ID = 'aid-nodes-content'



webix.ui.datafilter.customSelectStatus = {
    getInputNode(node){
        return node ? node.firstChild : { value: null};
    },
    getValue(node){
        //console.log(node.firstChild.value)
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

        node.onchange = function(){
            console.log('onchange')
            master.filterByAll();
        };
        node.onclick = webix.html.preventEvent;
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
    name: 'aidNodes',

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
                        label: 'aiNodes'
                    }
                ]
            },
            {
                  view:"iframe", id:"frame-body", src:"javascript/modules/nodes/nodes.html"
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