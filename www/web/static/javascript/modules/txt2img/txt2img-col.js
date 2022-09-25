import { Collection } from '../core/collection.js';
import { Txt2imgModel } from "./txt2img-model.js";

export class Txt2imgCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = Txt2imgModel;
        this.dataSets = {
            'txt2img': this.items
        }
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


}

