const SafeRequest = require('../utils/SafeRequest.js');
/**
 * @fileoverview 实现Index表的数据模型
 * @author 代磊
 */
class IndexService {

    /**
     * @constructor
     * @param {obj} ctx koa上下文
     */
    constructor(ctx) {}

    /**
     * 获取Index的全部数据
     *
     * @param {*} option
     * @returns promise
     */
    getList(url, option) {
        let req = new SafeRequest(url);
        const data = req.fetch();
        return data;
    }

    add(url, options) {
        let req = new SafeRequest(url);
        const data = req.fetch(options);
        return data;
    }
}

module.exports = IndexService;