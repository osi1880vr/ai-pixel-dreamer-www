import './txt2vid-comp.js';
import { txt2vidCollection } from "./txt2vid-col.js";


aid.views.txt2vid = {

    nav: {
        order: 500,

        setTree(data) {
            data.push({
                id: 'txt2vid',
                value: `txt2vid`,
                open: true,
                type: 'vul',
                icon: '<span class="fas fa-bolt" width: 20px"></span>',
                action() {
                    window.location.hash = `#${this.type}`;
                },
                data: aid.model.txt2vid.filterNodes
            });



        },
    },


    contextmenu: {
        'adi-txt2vid-list': {
            'show-detail': {
                label: 'Details anzeigen',
                action(params) {
                    aid.views.txt2vid.openDetailDialog(params.model)
                },
                isHidden(params) { return false }
            },

        }
    },

    routes: {
        'txt2vid'() {
            webix.ui({
                view: 'txt2vid',
            }, $$('right-content'));

        },
        'txt2vid_basic_settings'() {
            webix.ui({
                view: 'txt2vid_basic_settings',
            }, $$('right-content'));
        },
        'txt2vid_prompt_help'() {
            webix.ui({
                view: 'txt2vid_prompt_help',
            }, $$('right-content'));
        },
        'txt2vid_sampler'() {
            webix.ui({
                view: 'txt2vid_sampler',
            }, $$('right-content'));

        },
        'txt2vid_3d'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_3d',
            }, $$('right-content'));
        },

        'txt2vid_2d_flip'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_2d_flip',
            }, $$('right-content'));
        },
        'txt2vid_frames'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_frames',
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
        console.log('fetch module txt2vid')

        aid.model.txt2vid = new txt2vidCollection()

    }

}
