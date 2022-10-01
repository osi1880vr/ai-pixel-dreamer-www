import { Collection } from '../core/collection.js';
import { Txt2vidModel } from "./txt2vid-model.js";

export class txt2vidCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = txt2vidModel;
        this.dataSets = {
            'txt2vid': this.items
        }
    }

    getUrlPath() { return `/txt2vid/${this.id}` }

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



         // return response.json(); // parses JSON response into native JavaScript objects
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

        const dummy = webix.ui({
            view:"window",
            container: "container",
            body:{
              view:"carousel",
              id:"carousel",
              width:aid.model.settings.attr.txt2vid.W+30,
              height:aid.model.settings.attr.txt2vid.H+30,
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

         async handler(id){
                // your code here
                //this.set_empty_container()
                let image = document.getElementById('image');
                let data_out = aid.model.settings.attr.txt2vid
                console.log(data_out)
                let response = await this.postData('api/v1/txttovid/run',data_out)
                console.log(response)

                this.get_carousel(JSON.parse(response))

            }
    dream() {
        console.log('dreaming')
        this.handler()
    }







}
