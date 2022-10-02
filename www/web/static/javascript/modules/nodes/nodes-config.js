import './nodes-comp.js';
import {params} from './nodes-params.js'
import {NodesCollection} from "./nodes-col.js";



aid.views.nodes = {

    params: params,

    nav: {
        order: 500,

        setTree(data){
            data.push({
                id: 'nodes',
                value: `AI Nodes`,
                open: true,
                type: 'ai-nodes',
                icon: '<span class="fas fa-bolt" style="color: ' + aid.helper.colors.aid.blue + '; width: 20px"></span>',
                action(){
                    window.location.hash = `#${this.type}`;
                },
                data: aid.model.nodes.filterNodes
            });



        },
    },

    contextmenu:{
        'adi-nodes-list': {
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
        'ai-nodes'(){
            webix.ui({
                view: 'aidNodes',
                //dataSet: aid.model.nodes.dataSets['vul']
            }, $$('right-content'));
        },

    },

    openDetailDialog(model){
        webix.ui({
            view: 'adiDetailDialog',
            title: 'aiNodes Details',
            model: model
        }).show()
    },


    async fetch(){
        console.log('fetch module aiNodes')

        aid.model.nodes = new NodesCollection()

    }

}