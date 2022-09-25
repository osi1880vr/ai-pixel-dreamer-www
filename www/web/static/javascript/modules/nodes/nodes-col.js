import {Collection} from '../core/collection.js';
import {NodesModel} from "./nodes-model.js";

export class NodesCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = NodesModel;
        this.dataSets = {
            'nodes': this.items
        }
    }

    getUrlPath(){ return `/nodes/${this.id}`}

    getItemsPayload(){ return this.responseJson.items }

    getOverviewListData(dataSet){
        const json = []

        for(const item of this.dataSets[dataSet]){
            json.push(item.getFormattedData())
        }

        return json
    }

    onParse(){
        this.setDataSets();
    }

    getDataSet(){}

    setDataSets(){}


}

