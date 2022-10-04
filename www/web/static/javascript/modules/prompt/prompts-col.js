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

    onParse() {
        this.setDataSets();
    }

     async handler(id){
        let image = document.getElementById('image');
        let data_out = aid.model.settings.attr.prompts
        let response = await this.postData('api/v1/prompts/dream',data_out)
        response = response.replaceAll('\"','').replaceAll('"','').replaceAll('\\n','\n')
        $$('prompts_text').setValue(response)

    }
    dream() {
        console.log('dreaming')
        this.handler()
    }
}
