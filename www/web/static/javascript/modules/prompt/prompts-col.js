import { Collection } from '../core/collection.js';
import { PromptsModel } from "./prompts-model.js";

export class PromptsCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = PromptsModel;
        this.dataSets = {
            'prompts': this.items
        }
    }

    getUrlPath() { return `/prompts/${this.id}` }

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

        }


     async handler(id){
            // your code here
            //this.set_empty_container()
            let image = document.getElementById('image');
            let data_out = aid.model.settings.attr.prompts
            let response = await this.postData('api/v1/prompts/dream',data_out)
            $$('prompts_text').setValue(response)

        }
    dream() {
        console.log('dreaming')
        this.handler()
    }


}
