var webpack = require('webpack');  
module.exports = {
    entry: {
        home:'./js/home/index.tsx',
        homestyle: './sass/home/index.scss',
        repertoire: './js/repertoire/index.tsx',
        repertoirestyle: './sass/repertoire/index.scss',
        teaching: './js/teaching/index.tsx',
        teachingstyle: './sass/teaching/index.scss',
        contact: './js/contact/index.tsx',
        contactstyle: './sass/contact/index.scss'
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/wwwroot/js"
    },
    devtool: "source-map",

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
     plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.scss$/, loader: "style!css!sass" },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" },

        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
   
}