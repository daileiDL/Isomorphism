const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    // devServer: {
    //     port: 8001,
    //     host: '0.0.0.0',
    //     historyApiFallback: true,
    //     stats: 'minimal',
    //     noInfo: false,
    //     compress: true,
    //     disableHostCheck: true,
    //     before(app) {

    //         app.get('/api/test', (req, res) => {

    //             res.json({
    //                 code: 200,
    //                 message: "hello world"
    //             });

    //         });

    //     }
    // }

    plugins: [
        // new CopyPlugin([{
        //     from: path.join(__dirname, 'src/web/views/common/pages/layout.html'),
        //     to: '../views/common/layout.html'
        // }]),
        new CopyPlugin([{
            from: path.join(__dirname, '../src/web/components'),
            to: '../components'
        }], {
            ignore: ['*.js', '*.css', '.DS_Store'],
            copyUnmodified: true
        }),
    ]

};