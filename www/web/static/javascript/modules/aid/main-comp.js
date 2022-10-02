

import './main-toolbar-comp.js';
import './main-navigation-comp.js';

webix.protoUI({
    name: 'mainView',
    $init(config) {
        config.id = 'main-view';

        config.rows = [
            { view: 'mainToolbar' },
            {
                cols: [
                    { view: 'mainNavigation' },
                    { view: 'resizer' },
                    { id: 'right-content' }
                ]
            }
        ];

        this.$ready.push(this.initComponent)
    },

    initComponent(){

        console.log('hello world')
    }


}, webix.ui.layout)