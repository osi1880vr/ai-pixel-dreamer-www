import { Collection } from '../core/collection.js';
import { Txt2vidModel } from "./txt2vid-model.js";

export class Txt2vidCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = Txt2vidModel;
        this.dataSets = {
            'txt2vid': this.items
        }
        this.title = 'Text to Video'
    }

    getUrlPath() { return `/txt2vid/${this.id}` }

    getItemsPayload() { return this.responseJson.items }

    onParse() {
        this.setDataSets();
    }






     async handler(id){
        let image = document.getElementById('image');
        let data_out = aid.model.settings.attr.txt2vid
        console.log(data_out)
        let response = await this.postData('api/v1/txttovid/run',data_out)
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


    toggle_updates() {
        if (this.interval) {
            clearInterval(this.interval);
        } else {

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



    }




}
