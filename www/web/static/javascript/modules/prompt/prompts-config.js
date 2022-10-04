import './prompts-comp.js';
import { PromptsCollection } from "./prompts-col.js";


aid.views.prompts = {

    nav: {
        order: 500,
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
