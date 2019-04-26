const CopyPlugin = require('copy-webpack-plugin');
const minify = require('html-minifier').minify;
const path = require('path');

module.exports = {

    output: {
        filename: 'scripts/[name].[contenthash:5].bundle.js',
    },

    plugins: [
        // new CopyPlugin([{
        //     from: path.join(__dirname, 'src/web/views/common/pages/layout.html'),
        //     to: '../views/common/layout.html'
        // }]),
        new CopyPlugin([{
            from: path.join(__dirname, '../src/web/components'),
            to: '../components',
            transform(content) {
                //html hint + fix html文件控制数量 ！！！
                const result = minify(content.toString("utf-8"), {
                    collapseWhitespace: true
                });
                return result;
            }
        }], {
            ignore: ['*.js', '*.css', '.DS_Store'],
        }),
    ]

};