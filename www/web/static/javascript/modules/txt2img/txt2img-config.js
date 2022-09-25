import './txt2img-comp.js';
import { Txt2imgCollection } from "./txt2img-col.js";


aid.views.txt2img = {

    nav: {
        order: 500,

        setTree(data) {
            data.push({
                id: 'txt2img',
                value: `txt2img`,
                open: true,
                type: 'vul',
                icon: '<span class="fas fa-bolt" width: 20px"></span>',
                action() {
                    window.location.hash = `#${this.type}`;
                },
                data: aid.model.txt2img.filterNodes
            });



        },
    },


    contextmenu: {
        'adi-txt2img-list': {
            'show-detail': {
                label: 'Details anzeigen',
                action(params) {
                    aid.views.txt2img.openDetailDialog(params.model)
                },
                isHidden(params) { return false }
            },

        }
    },

    routes: {
        'txt2img'() {
            webix.ui({
                view: 'txt2img',
            }, $$('right-content'));

        },
        'txt2img_basic_settings'() {
            webix.ui({
                view: 'txt2img_basic_settings',
            }, $$('right-content'));
        },
        'txt2img_prompt_help'() {
            webix.ui({
                view: 'txt2img_prompt_help',
            }, $$('right-content'));
        },
        'txt2img_rendering_basic'() {
            webix.ui({
                view: 'txt2img_rendering_basic',
            }, $$('right-content'));

        },
        'txt2img_rendering_upscaling'() {
            webix.ui({
                view: 'txt2img_rendering_upscaling',
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
        console.log('fetch module txt2img')

        aid.model.txt2img = new Txt2imgCollection()
        aid.model.txt2img.dataload = {}

    }

}