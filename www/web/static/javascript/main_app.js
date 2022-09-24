
var toolbar =  {
                    view:"toolbar",
                    id:"top_toolbar",
                    height: 30,
                    //paddingY:2,
                    elements:[
                      { view:"button",
                      value:"Dream",
                       //click:handler
                       },
                       { }
                    ]
                  }



var tab1 = {
             rows:[
               { view:"toolbar", elements:[
                 { gravity:2 },
                 { view:"button", width: 210, value:"Animate item in Tree", click:function(){
                   webix.html.addCss( $$("tree").getItemNode(1), "animated flash");
                   webix.delay(() => {
                     webix.html.removeCss($$("tree").getItemNode(1), "animated flash");
                   },null,null,1000);
                 }},
                 { view:"button", width: 210, value:"Animate the whole Tree", click:function(){
                   webix.html.addCss($$("tree").$view, "animated swing");
                   webix.delay(() => {
                     webix.html.removeCss($$("tree").$view, "animated swing");
                   },null,null,1000);
                 }},
                 { view:"button", width: 210, value:"Amimate row in DataTable", click:function(){
                   $$("grid").addRowCss(2,"animated flash");
                   webix.delay(() => {
                     $$("grid").removeRowCss(2, "animated flash");
                   },null,null,1000);
                 }}
               ]},

               ]};

webix.ready(function(){

  webix.ui({
        rows:[

              toolbar,

                {
                    cols:[

                        {
                        view:"tree",
                        width: 350,
                        height: 830,
                          on: {
                            onItemClick: function(id) {
                              if(this.isBranchOpen(id)){
                              this.close(id);
                              }
                             else this.open(id);

                             $$("content").setValue(tab1);


                            }

                          },
                        data: [
                            {id:"root", value:"Chose your Dream", open:true, data:[
                                { id:"1", open:true, value:"Text 2 Image", data:[
                                    { id:"1.1", value:"Basic Settings", page:'txt2img_basic' },
                                    { id:"1.2", value:"Prompt Help" },
                                    { id:"1.3", value:"Rendering", data: [
                                        { id:"1.3.1", value:"Basic" },
                                        { id:"1.3.2", value:"Mask" },
                                        { id:"1.3.3", value:"Init" },
                                    ] }
                                ]},
                                { id:"2", open:false, value:"Image 2 Image", data:[
                                    { id:"2.1", value:"Basic Settings" },
                                    { id:"2.2", value:"Prompt Help" },
                                ]},
                              { id:"3", open:false, value:"Text 2 Video", data:[
                                  { id:"3.1", value:"Basic Settings" },
                                  { id:"3.2", value:"Prompt Help" },
                                  { id:"3.3", value:"Rendering", data: [
                                      { id:"3.3.1", value:"Sampler" },
                                      { id:"3.3.2", value:"3D Animation" },
                                      { id:"3.3.3", value:"2D Flip Sequence" },
                                      { id:"3.3.4", value:"Frame Setup" },
                                      ]}
                              ]},
                              { id:"4", open:false, value:"Video 2 Video", data:[
                                  { id:"4.1", value:"Octavia" },
                                  { id:"4.2", value:"Superb" },
                                  { id:"3.3", value:"Rendering", data: [
                                    { id:"3.3.1", value:"Sampler" },
                                    { id:"3.3.2", value:"3D Animation" },
                                    { id:"3.3.3", value:"2D Flip Sequence" },
                                    { id:"3.3.4", value:"Frame Setup" },
                                    ]}
                              ]},
                              { id:"5", open:false, value:"Postprocessing", data:[

                              ]},
                              { id:"6", open:false, value:"aiNodes", data:[

                              ]}

                            ]}
                        ]

                        },

                        { id:"content", format:webix.template.empty }

                    ]
                }

              ]
        });
});