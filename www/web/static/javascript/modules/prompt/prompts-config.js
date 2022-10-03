import './prompts-comp.js';
import { PromptsCollection } from "./prompts-col.js";


aid.views.prompts = {

    nav: {
        order: 500,

        setTree(data) {
            data.push({
                id: 'prompts',
                value: `prompts`,
                open: true,
                type: 'vul',
                icon: '<span class="fas fa-bolt" width: 20px"></span>',
                action() {
                    window.location.hash = `#${this.type}`;
                },
                data: aid.model.prompts.filterNodes
            });



        },
    },


    contextmenu: {
        'adi-prompts-list': {
            'show-detail': {
                label: 'Details anzeigen',
                action(params) {
                    aid.views.prompts.openDetailDialog(params.model)
                },
                isHidden(params) { return false }
            },

        }
    },

    routes: {
        'ai-prompts'() {
            this.prompts = aid.model.settings.attr
            webix.ui({
                view: 'ai-prompts',
            }, $$('right-content'));

        },


    },

    openDetailDialog(model) {
        webix.ui({
            view: 'adiDetailDialog',
            title: 'Text to Image Details',
            model: model
        }).show()
    },

    async fetch() {
        console.log('fetch module prompts')

        aid.model.prompts = new PromptsCollection()

    }

}
