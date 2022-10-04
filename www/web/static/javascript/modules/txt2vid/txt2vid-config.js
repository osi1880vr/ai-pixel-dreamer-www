import './txt2vid-comp.js';
import { Txt2vidCollection } from "./txt2vid-col.js";


aid.views.txt2vid = {

    nav: {
        order: 500,
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
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid',
            }, $$('right-content'));
        },
        'txt2vid_basic_settings'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_basic_settings_view',
            }, $$('right-content'));
        },
        'txt2vid_sampler'() {
            webix.ui({
                view: 'txt2vid_sampler_view',
            }, $$('right-content'));
        },
        'txt2vid_init'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_init_view',
            }, $$('right-content'));
        },
        'txt2vid_animation_mode'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_animation_mode_view',
            }, $$('right-content'));
        },
        'txt2vid_3d_motion'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_3d_motion_view',
            }, $$('right-content'));
        },
        'txt2vid_3d_depth_warping'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_3d_depth_warping_view',
            }, $$('right-content'));
        },
        'txt2vid_2d_flip'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_2d_flip_view',
            }, $$('right-content'));
        },
        'txt2vid_upscaling'() {
            this.txt2vid = aid.model.settings.attr
            webix.ui({
                view: 'txt2vid_upscaling_view',
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
        aid.model.txt2vid = new Txt2vidCollection()
    }
}
