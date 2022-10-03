import { Collection } from '../core/collection.js';
import { Txt2imgModel } from "./txt2img-model.js";

export class Txt2imgCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = Txt2imgModel;
        this.dataSets = {
            'txt2img': this.items
        }
        this.interval = ''
    }

    getUrlPath() { return `/txt2img/${this.id}` }

    getItemsPayload() { return this.responseJson.items }

    getOverviewListData(dataSet) {
        const json = []

        for (const item of this.dataSets[dataSet]) {
            json.push(item.getFormattedData())
        }

        return json
    }

    onParse() {
        this.setDataSets();
    }

    getDataSet() { }

    setDataSets() { }

    async getData(url = '',) {
        // Default options are marked with *
        let response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });

        const text = await response.text();
        return text;

    }

    async postData(url = '', data = {}) {
      // Default options are marked with *
      let response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

        const text = await response.text();
        return text;
    }

        set_empty_container() {
            $$('temp_container').rows = [{
                        view:"template",
                        id:"carousel_template",
                        template: '<div id="container"></div>'
                    }
                 ]
        }


        get_carousel(image_array) {

          function img(obj){
            return '<img src="http://localhost:8080/'+obj.src+'" class="content" ondragstart="return false"/>'
          }


        let carousel_array = {"images":[]}
        for (const image of image_array) {
            carousel_array.images.push({ css: "image", template:img, data:{src:image} })
        }
        const data = carousel_array.images

        if ($$('carousel')) {
            $$('carousel').destructor()
        }


        const dummy = webix.ui({
            view:"window",
            container: "container",
            body:{
              view:"carousel",
              id:"carousel",
              width:aid.model.settings.attr.txt2img.W+30,
              height:aid.model.settings.attr.txt2img.H+30,
              cols:data
            },
            head:{
              view:"toolbar", type:"MainBar", elements:[
                {view:"label", label: "Photobook", align:'left'}
              ]
            },
            top:10,
            left:10
          }).show();

        }

        async refresh_current_images(me){
            let response = await me.getData('/api/v1/txttoimg/get_results')
            response = JSON.parse(response)

            if (!response.rendering & response.current_images.length > 0){
                clearInterval(me.interval);
            }
            if(response.current_images.length > 0){
                me.get_carousel(JSON.parse(response.current_images))
            }

        }

         async handler(id){
                // your code here
                //this.set_empty_container()
                let image = document.getElementById('image');
                let data_out = aid.model.settings.attr.txt2img
                console.log(data_out)
                let response = await this.postData('/api/v1/txttoimg/run',data_out)
                console.log(response)

                //this.interval = setInterval(this.refresh_current_images(this), 2000, this);

                this.interval = setInterval( async () => {
                    const me = this
                    let response = await me.getData('/api/v1/txttoimg/get_results')
                    response = JSON.parse(response)

                    if (!response.rendering & response.current_images.length > 0){
                        clearInterval(me.interval);
                    }
                    if(response.current_images.length > 0){
                        me.get_carousel(response.current_images)
                    }
                  }, 1000); // update 1 time per second



            }
    dream() {
        console.log('dreaming')
        this.handler()
    }







}
