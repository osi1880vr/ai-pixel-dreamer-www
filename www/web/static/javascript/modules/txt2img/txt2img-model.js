import { Model } from '../core/model.js';

export class Txt2imgModel extends Model {
    constructor(params) {
        super(params);
        this.url = `${aid.api.host}/nodes`
    }



    toViewJSON() {

        const webixData = {

            _model: this
        }


        return webixData
    }

}
