

aid.nav_tree = {
    id:"root",
    value:"Chose your Dream",
    open:true,
    data:[
            { id:"ai-nodes",
           open:false,
           value:"aiNodes",
           type:"ai-nodes",
           icon: '<span class="fa-solid fa-network-wired" style="color: orange; width: 20px"></span>',
           action() { window.location.hash = `#${this.type}`; },
           data:[

           ]},
           { id:"txt2img",
           open:true,
           type:"txt2img",
           value:"Text 2 Image",
           icon: '<span class="fa-regular fa-image" style="color: orange; width: 20px"></span>',
           action() { window.location.hash = `#${this.type}`; },
           data:[
               { id:"txt2img_basic_settings",
               type:"txt2img_basic_settings",
               value:"Basic Settings",
               page:'txt2img_basic',
                icon: '<span class="fa-solid fa-sliders" style="color: orange; width: 20px"></span>',
                action() { window.location.hash = `#${this.type}`; },
                },
               { id:"txt2img_prompt_help",
               type:"txt2img_prompt_help",
                value:"Prompt Help",
                 icon: '<span class="fa-solid fa-terminal" style="color: orange; width: 20px"></span>',
                 action() { window.location.hash = `#${this.type}`; },
                 },
               { id:"txt2img_rendering",
               type:"txt2img_rendering",
               value:"Rendering",
               icon: '<span class="fa-solid fa-diagram-next" style="color: orange; width: 20px"></span>',
               data: [
                   { id:"txt2img_rendering_basic",
                   type:"txt2img_rendering_basic",
                   value:"Basic",
                   icon: '<span class="fa-solid fa-wrench" style="color: orange; width: 20px"></span>',
                   action() { window.location.hash = `#${this.type}`; },
                   },
                   { id:"txt2img_rendering_mask",
                   type:"txt2img_rendering_mask",
                   value:"Mask",
                   icon: '<span class="fa-solid fa-masks-theater" style="color: orange; width: 20px"></span>',
                    action() { window.location.hash = `#${this.type}`; },
                    },
                   { id:"txt2img_rendering_init",
                   type:"txt2img_rendering_init",
                   value:"Init" ,
                   icon: '<span class="fa-solid fa-x-ray" style="color: orange; width: 20px"></span>',
                   action() { window.location.hash = `#${this.type}`; },
                   },
               ] }
           ]},
           { id:"2", open:false, value:"Image 2 Image",
           icon: '<span class="fa-regular fa-clone" style="color: orange; width: 20px"></span>',
           data:[
               { id:"2.1", value:"Basic Settings",icon: '<span class="fa-solid fa-sliders" style="color: orange; width: 20px"></span>', },
               { id:"2.2", value:"Prompt Help",icon: '<span class="fa-solid fa-terminal" style="color: orange; width: 20px"></span>', },
           ]},
         { id:"3", open:false, value:"Text 2 Video",
         icon: '<span class="fa-solid fa-photo-film" style="color: orange; width: 20px"></span>',
         data:[
             { id:"3.1", value:"Basic Settings",icon: '<span class="fa-solid fa-sliders" style="color: orange; width: 20px"></span>', },
             { id:"3.2", value:"Prompt Help",icon: '<span class="fa-solid fa-terminal" style="color: orange; width: 20px"></span>', },
             { id:"3.3", value:"Rendering",
             icon: '<span class="fa-solid fa-diagram-next" style="color: orange; width: 20px"></span>',
             data: [
                 { id:"3.3.1", value:"Sampler",icon: '<span class="fa-solid fa-gauge-simple-high" style="color: orange; width: 20px"></span>', },
                 { id:"3.3.2", value:"3D Animation",icon: '<span class="fa-solid fa-cubes" style="color: orange; width: 20px"></span>', },
                 { id:"3.3.3", value:"2D Flip Sequence",icon: '<span class="fa-solid fa-camera-rotate" style="color: orange; width: 20px"></span>', },
                 { id:"3.3.4", value:"Frame Setup",icon: '<span class="fa-solid fa-camera-retro " style="color: orange; width: 20px"></span>', },
                 ]}
         ]},
         { id:"4", open:false, value:"Video 2 Video",
         icon: '<span class="fa-solid fa-film" style="color: orange; width: 20px"></span>',
         data:[
             { id:"4.1", value:"Octavia",icon: '<span class="fas fa-asterisk " style="color: orange; width: 20px"></span>', },
             { id:"4.2", value:"Superb",icon: '<span class="fas fa-asterisk " style="color: orange; width: 20px"></span>', },
             { id:"3.3", value:"Rendering",
             icon: '<span class="fa-solid fa-diagram-next" style="color: orange; width: 20px"></span>',
             data: [
               { id:"3.3.1", value:"Sampler",icon: '<span class="fa-solid fa-gauge-simple-high" style="color: orange; width: 20px"></span>', },
               { id:"3.3.2", value:"3D Animation",icon: '<span class="fa-solid fa-cubes" style="color: orange; width: 20px"></span>', },
               { id:"3.3.3", value:"2D Flip Sequence",icon: '<span class="fa-solid fa-camera-rotate" style="color: orange; width: 20px"></span>', },
               { id:"3.3.4", value:"Frame Setup",icon: '<span class="fa-solid fa-camera-retro" style="color: orange; width: 20px"></span>', },
               ]}
         ]},
         { id:"5", open:false, value:"Postprocessing",
         icon: '<span class="fa-solid fa-flask" style="color: orange; width: 20px"></span>',
         data:[

         ]}


       ]};

