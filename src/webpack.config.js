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
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
   
}