import {Model} from "./model.js";
import {Request} from "./http-request.js";

export class Collection {
    constructor(params) {
        _.extend(this, params)

        this.items = [];
        this.modelClass = Model;
    }


    getUrlHost(){ return aid.api.host}

    getUrlPath(){ return ''}

    getUrlQuery(){ return ''}

    getUrl(){ return this.getUrlHost() + this.getUrlPath() + this.getUrlQuery() }

    getItemsPayload(){
        return this.responseJson
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


    toJSON(){
        return _.map(this.items,(item)=>{
            return _.clone(item.toJSON())
        })
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

    async getData(url = '',) {
        // Default options are marked with *
        let response = await fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        });

        const text = await response.text();
        return text;

    }

    get_carousel(image_array, title) {

      function img(obj){
         return '<img src="' + location.protocol + '//' + location.host +obj.src+'" class="content" ondragstart="return false"/>'
      }
        let carousel_array = {"images":[]}
        for (const image of image_array) {
            carousel_array.images.push({ css: "image", template:img, data:{src:image} })
        }
        const data = carousel_array.images

        if ($$('carousel')) {
            $$('carousel').destructor()
        }

        const dummy = webix.ui({
            view:"window",
            container: "container",
            body:{
              view:"carousel",
              id:"carousel",
              width:aid.model.settings.attr.txt2vid.W+30,
              height:aid.model.settings.attr.txt2vid.H+30,
              cols:data
            },
            head:{
              view:"toolbar", type:"MainBar", elements:[
                {view:"label", label: title, align:'left'}
              ]
            },
            top:10,
            left:10
          }).show();

    }

}
