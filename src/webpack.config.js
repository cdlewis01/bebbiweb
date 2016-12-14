var webpack = require('webpack');  
module.exports = {
    entry: './js/home/index.tsx',
    output: {
        filename: "bundle.js",
        path: __dirname + "/wwwroot/js/home"
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