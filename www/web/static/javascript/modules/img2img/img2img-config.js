import './img2img-comp.js';
import { Img2imgCollection } from "./img2img-col.js";


aid.views.img2img = {

    nav: {
        order: 500,


    },


    contextmenu: {
        'adi-img2img-list': {
            'show-detail': {
                label: 'Details anzeigen',
                action(params) {
                    aid.views.img2img.openDetailDialog(params.model)
                },
                isHidden(params) { return false }
            },

        }
    },

    routes: {
        'img2img'() {
            webix.ui({
                view: 'img2img',
            }, $$('right-content'));

        },
        'img2img_basic_settings'() {
            webix.ui({
                view: 'img2img_basic_settings',
            }, $$('right-content'));
        },
        'img2img_prompt_help'() {
            webix.ui({
                view: 'img2img_prompt_help',
            }, $$('right-content'));
        },
        'img2img_rendering_basic'() {
            webix.ui({
                view: 'img2img_rendering_basic',
            }, $$('right-content'));

        },
        'img2img_rendering_upscaling'() {
            this.img2img = aid.model.settings.attr
            webix.ui({
                view: 'img2img_rendering_upscaling',
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
        console.log('fetch module img2img')

        aid.model.img2img = new Img2imgCollection()

    }

}
