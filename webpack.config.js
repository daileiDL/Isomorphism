const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlAfterWebpackPlugin = require("./config/htmlAfterWebpackPlugin.js");
const glob = require('glob');

const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _mergeconfig = require(`./config/webpack.${_mode}.js`);
const merge = require('webpack-merge');

//动态添加入口
function getEntry() {
    let entry = {
        scripts: {},
        htmls: []
    };
    //读取src目录所有page入口
    let scripts = glob.sync('./src/web/views/**/*.js');
    for (let js of scripts) {
        if (/.+\/([a-zA-Z]+-[a-zA-Z]+)(\.entry\.js$)/g.test(js) == true) {
            let entrykey = RegExp.$1;
            entry.scripts[entrykey] = js;
            const [dist, template] = entrykey.split('-');
            entry.htmls.push(new HtmlWebpackPlugin({
                template: `src/web/views/${dist}/pages/${template}.html`,
                filename: `../views/${dist}/pages/${template}.html`,
                chunks: [entrykey],
                inject: false,
            }));
        }
    }
    //console.log(entry)
    return entry;
}

const config = {
    entry: getEntry().scripts,
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.resolve(__dirname, 'dist/assets'),
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.css$/,
            //use: ['style-loader', 'css-loader'],
            use: [{
                    loader: MiniCssExtractPlugin.loader //提取css
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader'
            ]
        }, ],
    },

    plugins: [
        //new CleanWebpackPlugin(['dist']),

        //提取css文件
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "styles/[id].css"
        }),

        //处理页面
        ...(getEntry().htmls),
        new htmlAfterWebpackPlugin(),

    ]

};

module.exports = merge(config, _mergeconfig);