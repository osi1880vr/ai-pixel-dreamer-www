import './option-comp.js';
import './main-nav-tree.js';


const TOOLBAR_ID = 'main-navigation-toolbar';
const TREE_ID = 'main-navigation-tree';



webix.protoUI({
    name: 'mainNavigation',
    $init(config) {
        config.id = 'main-nav';
        config.rows = [
            {
                view: 'toolbar',
                id: TOOLBAR_ID,
                paddingX: 10,
                elements: [
                    {view: "label", label: "Navigation", align: "left"},
                ]
            },
            {
                view: 'tree',
                id: TREE_ID,
                header: false,
                editable: false,
                resizeColumn: true,
                select: 'row',
                width: 350,
                type: {
                    folder (obj) {
                        if (obj.hasOwnProperty('icon')) {
                            return obj.icon
                        }
                    }
                },
                data: [],
                on: {
                    onItemClick(id, e, trg) {
                        const node = this.getItem(id)
                        if (node.hasOwnProperty('action')) {
                            node.action()
                        }
                    },
                    onBeforeOpen(id){
                        const node = this.getItem(id)
                        if (node.hasOwnProperty('onBeforeOpen')) {
                            node.onBeforeOpen(id)
                        }
                    }
                }
            },
        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){
        this.$$tree = $$(TREE_ID);
        this.load();
    },

    load() {
        const treeData = [];

        this.$$tree.clearAll();
        this.$$tree.define('data', aid.nav_tree);
        this.$$tree.refresh();
    }

}, webix.ui.layout)
