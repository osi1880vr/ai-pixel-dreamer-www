import { Collection } from './collection.js';
import { SettingsModel } from "./settings-model.js";

export class SettingsCollection extends Collection {
    constructor(params) {
        super(params);
        this.modelClass = SettingsModel;
        this.dataSets = {
                    'settings': this.items
                }
    }


    getUrlHost(){ return aid.api.host }
    getUrlPath(){ return '/settings/get'}
    getUrlQuery(){ return ''}

    getSettingsPath(){ return `${this.getUrlHost()}${this.getUrlPath()}${this.getUrlQuery()}` }



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
