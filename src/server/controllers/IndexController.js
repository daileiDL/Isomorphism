//const bookthis.indexService = require('../this.indexServices');
const qs = require('querystring');
const cheerio = require('cheerio');
import {
    route,
    GET,
    POST,
    before
} from 'awilix-koa';

const {
    URLSearchParams
} = require("url");

@route('/index')
class IndexController {
    //aop
    constructor({
        indexService
    }) {
        this.indexService = indexService;
    }

    @route('/index')
    @GET()
    async actionIndex(ctx, next) {
        var queryobj = {};
        for (const k of Object.keys(ctx.query)) {
            if (ctx.query[k]) {
                queryobj[k] = ctx.query[k].trim();
            }
        }

        var querystring = qs.stringify(queryobj);

        let res = await this.indexService.getList('/restfulbooks?' + querystring);
        let tempdata = {
            books: res.data.items,
            pages: res.data._meta,
            querys: queryobj
        }

        if (ctx.request.header['x-pjax'] === 'true') {
            let _html = ctx.tmpl('index/pages/index', tempdata);
            const $ = cheerio.load(_html);
            let html = '';
            $('#pjax-html').each(function () {
                html += $(this).html();
            })
            $('.pjax-js').each(function () {
                html += `<script src="${$(this).attr('src')}"></script>`;
            })
            $('.pjax-css').each(function () {
                html += `<link rel="stylesheet" href="${$(this).attr('href')}">`;
            })
            //console.log(_html)
            ctx.body = html;
            //ctx.body = $('#pjax-html').html();
        } else {
            await ctx.render('index/pages/index', tempdata);
        }

    }

    async actionAdd(ctx, next) {
        let params = new URLSearchParams();
        let body = ctx.request.body;
        params.append("Books[name]", "测试");
        for (const k of Object.keys(body)) {
            params.append(k, body[k]);
        }

        let res = await this.indexService.add('/restfulbooks', {
            method: 'post',
            params
        });
        console.log(res);
        ctx.body = res;
    }

    @route('/category')
    @GET()
    async actionCategory(ctx, next) {
        if (ctx.request.header['x-pjax'] === 'true') {
            // let html = '<x-category></x-category>';
            // html += '<script src="/scripts/index-category.bundle.js"></script>';
            // html += '<script src="/styles/index-category.css"></script>';
            let _html = ctx.tmpl('index/pages/category', {});
            const $ = cheerio.load(_html);
            let html = '';
            $('#pjax-html').each(function () {
                html += $(this).html();
            })
            $('.pjax-js').each(function () {
                html += `<script src="${$(this).attr('src')}"></script>`;
            })
            $('.pjax-css').each(function () {
                html += `<link rel="stylesheet" href="${$(this).attr('href')}">`;
            })
            //console.log(_html)
            ctx.body = html;
        } else {
            await ctx.render('index/pages/category');
        }

    }

}

module.exports = IndexController;