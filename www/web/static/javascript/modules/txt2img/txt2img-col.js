import { Collection } from '../core/collection.js';
import { Txt2imgModel } from "./txt2img-model.js";

export class Txt2imgCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = Txt2imgModel;
        this.dataSets = {
            'txt2img': this.items
        }
        this.title = 'Text to Image'
    }

    getUrlPath() { return `/txt2img/${this.id}` }

    getItemsPayload() { return this.responseJson.items }

    onParse() {
        this.setDataSets();
    }


    set_empty_container() {
        $$('temp_container').rows = [{
            view:"template",
            id:"carousel_template",
            template: '<div id="container"></div>'
        }]
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

        let image = document.getElementById('image');
        let data_out = aid.model.settings.attr.txt2img
        console.log(data_out)
        let response = await this.postData('/api/v1/txttoimg/run',data_out)
        console.log(response)

        this.interval = setInterval( async () => {
            const me = this
            let response = await me.getData('/api/v1/txttoimg/get_results')
            response = JSON.parse(response)

            if (!response.rendering & response.current_images.length > 0){
                clearInterval(me.interval);
            }
            if(response.current_images.length > 0){
                me.get_carousel(response.current_images, me.title)
            }
          }, 1000); // update 1 time per second
        }
    dream() {
        console.log('dreaming')
        this.handler()
    }

}
