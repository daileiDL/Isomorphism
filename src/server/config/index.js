// const {join} = require('path');
// const _ = require('lodash');

import {join} from 'path';
import _ from 'lodash';

if(false){
    console.log('aaaa')
}

let config={
    VIEWS_DIR: join(__dirname, '..', 'views'),
    STATIC_DIR: join(__dirname, '..', 'assets'),
    COMPONENTS_DIR: join(__dirname, '..', 'components'),
    baseUrl: "http://www.book.com"
}

if(process.env.NODE_ENV === 'development'){
    let devConfig = {
        PROT: 3000,
    }
    config = _.extend(config, devConfig);
}
if(process.env.NODE_ENV === 'production'){
    let proConfig = {
        PROT: 3001,
    }
    config = _.extend(config, proConfig);
}

module.exports = config;