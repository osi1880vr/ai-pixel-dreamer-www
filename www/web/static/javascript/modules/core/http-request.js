
function getFetchErrorJson(){
    return {
        name: this.name,
        message: this.message,
        status: this.fetchInfo.status,
        url: this.fetchInfo.url,
        stack: this.stack,
    }
}

export class Request {
    constructor(params) {
        _.extend(this, params)

        this.init = {
            method: this.method,
            cache: "no-store",
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if(this.hasOwnProperty('body')){
            this.init.body = JSON.stringify(this.body)
        }

        //console.log(this)
    }

    async fetch(){
        const response = await fetch(this.url, this.init);

        if(!response.ok){
            const err = new Error(response.statusText)
            err.fetchInfo = response
            err.toJSON = getFetchErrorJson
            webix.ui({
                view: 'mainAlertDialog',
                info: err.toJSON(),
            }).show()
        }

        return await response.json()
    }
}