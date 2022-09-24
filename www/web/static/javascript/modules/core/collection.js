import {Model} from "./model.js";
import {Request} from "./http-request.js";

export class Collection {
    constructor(params) {
        _.extend(this, params)

        this.items = [];
        this.modelClass = Model;
    }

    async read() {
        const read = new Request({
            url: this.getUrl(),
            method: 'GET',
        })

        this.responseJson = await read.fetch()
        this.parse()
    }

    getUrlHost(){ return vms.api.host}

    getUrlPath(){ return ''}

    getUrlQuery(){ return ''}

    getUrl(){ return this.getUrlHost() + this.getUrlPath() + this.getUrlQuery() }

    getItemsPayload(){
        return this.responseJson
    }

    remove(modelItems){
        const me = this
        _.each(modelItems, (model) => {
            this.items = _.reject(this.items, (item)=>{
                return _.isEqual(model, item)
            })
        });
    }

    set(jsonItems){
        const me = this
        _.each(jsonItems, (json) => {
            const model = new me.modelClass()
            model.parent = me
            model.set(json)
            me.items.push(model)
        });
        this.onSet();
    }

    parse() {
        const jsonItems = this.getItemsPayload()
        for(const jsonItem of jsonItems){
            const model = new this.modelClass()
            model.set(jsonItem)
            model.parent = this
            this.items.push(model)
        }
        this.onParse();
    }

    where(aAttributes){
        const me = this;

        return _.filter(me.items, (aItem)=>{
            if(_.isMatch(aItem.attributes, aAttributes)){
                return aItem
            }
        })

    }

    toJSON(){
        return _.map(this.items,(item)=>{
            return _.clone(item.toJSON())
        })
    }

    toViewList(selection = this.items){
        const list = []

        for(const item of selection){
            list.push(item.toViewJSON())
        }

        return list
    }

    count(){
        return this.items.length
    }

    each(iteratee){
        return _.each(this.items, iteratee)
    }

    map(iteratee){
        return _.map(this.items, iteratee)
    }

    onParse(){}
    onSet(){}

}