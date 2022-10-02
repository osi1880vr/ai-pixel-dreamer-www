import './icanvas-comp.js';
import {params} from './icanvas-params.js'
//import {NodesCollection} from "./nodes-col.js";



aid.views.icanvas = {

    params: params,

    nav: {
        order: 500,

        setTree(data){
            data.push({
                id: 'i-canvas',
                value: `I Canvas`,
                open: true,
                type: 'i-canvas',
                icon: '<span class="fas fa-bolt" style="color: ' + aid.helper.colors.aid.blue + '; width: 20px"></span>',
                action(){
                    window.location.hash = `#${this.type}`;
                },
                data: aid.model.icanvas.filterNodes
            });



        },
    },

    contextmenu:{
        'adi-icanvas-list': {
            'show-detail': {
                label: 'Details anzeigen',
                action(params){
                    aid.views.nodes.openDetailDialog(params.model)
                },
                isHidden(params){ return false }
            },

        }
    },

    routes: {
        'i-canvas'(){
            webix.ui({
                view: 'iCanvas',
                //dataSet: aid.model.nodes.dataSets['vul']
            }, $$('right-content'));
        },

    },

    openDetailDialog(model){
        webix.ui({
            view: 'adiDetailDialog',
            title: 'iCanvas Details',
            model: model
        }).show()
    },


    async fetch(){
        console.log('fetch module iCanvas')

        //aid.model.nodes = new NodesCollection()

    }

}