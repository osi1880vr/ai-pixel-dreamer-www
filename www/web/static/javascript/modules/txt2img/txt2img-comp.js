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