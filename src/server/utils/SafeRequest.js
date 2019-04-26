const fetch = require('node-fetch');
const config = require('../config');

class SafeRequest {
    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }
    fetch(options) {
        let result = {
            code: 0,
            messege: '',
            data: {}
        };

        let req;
        if(options) {
            req = fetch(this.baseUrl + this.url, {
                method:options.method,
                body:options.params
            });
        }else{
            req = fetch(this.baseUrl + this.url);
        }

        return new Promise((resolve, reject) => {
            req.then(res => res.json()).then(json => {
                result.data = json;
                resolve(result);
            }).catch(error => {
                result.code = 1;
                result.messege = "请求服务数据出错";
                reject(result);
            })
        })

    }
}

module.exports = SafeRequest;