import {Model} from '../core/model.js';

export class SettingsModel extends Model {
    constructor(params) {
        super(params);
        this.url = `${aid.api.host}/settings/get`
    }

    getUrlHost(){ return aid.api.host }
    getUrlPath(){ return '/settings/get'}
    getUrlQuery(){ return ''}

    getSettingsPath(){ return `${this.getUrlHost()}${this.getUrlPath()}${this.getUrlQuery()}` }


    parse(){
        this.attr = JSON.parse(this.responseJson)
    }


}
