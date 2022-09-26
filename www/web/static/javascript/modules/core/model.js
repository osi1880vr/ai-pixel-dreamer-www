
import {Request} from "./http-request.js";



export class Model {
    constructor(params={}) {
        _.extend(this, params)
        this.attr = {};

        if (this.hasOwnProperty('id')){
            this.attr.id = params.id
        }

    }




    async getSettings() {
        const settings = new Request({
            url: this.getSettingsPath(),
            method: 'GET'
        })

        this.responseJson = await settings.fetch()
        this.parse()
    }


    async create() {
        const create = new Request({
            url: this.getCreatePath(),
            method: 'POST',
            body: this.toJSON()
        })

        this.responseJson = await create.fetch()
        this.parse()
    }

    async read() {
        const read = new Request({
            url: this.getReadPath(),
            method: 'GET',
        })

        this.responseJson = await read.fetch()
        this.parse()
    }

    async update() {
        const update = new Request({
            url: this.getUpdatePath(),
            method: 'PUT',
            body: this.toJSON()
        })

        this.responseJson = await update.fetch()
        this.parse()
    }

    async delete() {
        const del = new Request({
            url: this.getDeletePath(),
            method: 'DELETE'
        })

        this.responseJson = await del.fetch()
        this.parse()
    }

    getUrlHost(){ return aid.api.host }
    getUrlPath(){ return ''}
    getUrlQuery(){ return ''}

    getCreatePath(){ return `${this.getUrlHost()}${this.getUrlPath()}${this.getUrlQuery()}` }
    getReadPath(){ return `${this.getUrlHost()}${this.getUrlPath()}/${this.get('id')}${this.getUrlQuery()}` }
    getUpdatePath(){ return this.getReadPath() }
    getDeletePath(){ return this.getReadPath() }

    getPayload(){
        return this.responseJson
    }

    parse() {
        _.extend(this.attributes, this.getPayload())
        this.onParse();
    }

    get(property){
        let value = undefined;
        if(this.attributes.hasOwnProperty(property)){
            value = this.attributes[property]
        }
        return value
    }

    set(attributes){
        _.extend(this.attributes, attributes)
        this.onSet();
    }

    toJSON(){
        return _.clone(this.attributes)
    }

    toPropertyList(removeProps =[]){
        const keyValue = [], viewJSON = _.clone(this.toViewJSON());

        delete viewJSON._model;

        for (const prop of removeProps){
            delete viewJSON[prop];
        }

        for(const prop in viewJSON){
            keyValue.push({ key: prop, value: viewJSON[prop] })
        }

        return keyValue
    }

    toViewJSON(){
        return this.toJSON()
    }



    onParse(){ }
    onSet(){}
}