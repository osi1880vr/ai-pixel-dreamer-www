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




             /*       const viewPlugin= new BaklavaJS.PluginRendererVue.ViewPlugin();
                    const optionsPlugin = new BaklavaJS.PluginOptionsVue.OptionPlugin();
                    const plugin = BaklavaJS.createBaklava(document.getElementById("editor"));
                    const editor = plugin.editor;
                    editor.use(optionsPlugin);
                    editor.use(viewPlugin);
*/


             console.log('hello');

             //

/*
        this.editor= new BaklavaJS.Core.Editor(),
        this.viewPlugin= new BaklavaJS.PluginRendererVue.ViewPlugin(),
        this.engine= new BaklavaJS.PluginEngine.Engine(true),
        this.intfTypePlugin= new BaklavaJS.PluginInterfaceTypes.InterfaceTypePlugin()

      this.editor.use(this.viewPlugin);
      this.editor.use(this.engine)
      this.editor.use(new BaklavaJS.PluginOptionsVue.OptionPlugin())
      this.editor.use(this.intfTypePlugin)
      this.intfTypePlugin.addType("number", "#00FF00");
      this.viewPlugin.enableMinimap = true;
    // create new node
    const SelectTestNode = new BaklavaJS.Core.NodeBuilder("SelectTestNode")
      .addOption("Simple", "SelectOption", "A", undefined, { items: ["A", "B", "C"] })
      .addOption("Advanced", "SelectOption", 3, undefined, { items: [
          { text: "X", value: 1 },
          { text: "Y", value: 2 },
          { text: "Z", value: 3 },
      ] })
      .addOutputInterface("Simple")
      .addOutputInterface("Advanced")
      .onCalculate((n) => {
          n.getInterface("Simple").value = n.getOptionValue("Simple");
          n.getInterface("Advanced").value = n.getOptionValue("Advanced");
      })
      .build();
    // add node to editor
    this.editor.registerNodeType("SelectTestNode", SelectTestNode)

*/
/*

        const plugin = BaklavaJS.createBaklava(document.getElementById("editor"));
      const editor = plugin.editor;
        const engine = new BaklavaJSEngine.Engine(true);
      editor.use(engine);

              const myNode = new BaklavaJS.Core.NodeBuilder("My Node")
                  .addInputInterface("My Interface")
                  .build();
              editor.registerNodeType("My Node", myNode);
              const myNode2 = new BaklavaJS.Core.NodeBuilder("My Node2")
                  .addInputInterface("My Interface2")
                  .build();
              editor.registerNodeType("My Node2", myNode);
*/
        },

    },

    openDetailDialog(model){
        webix.ui({
            view: 'adiDetailDialog',
            title: 'Schwachstellen Details',
            model: model
        }).show()
    },


    async fetch(){
        console.log('fetch module vul')

        aid.model.nodes = new NodesCollection()

    }

}