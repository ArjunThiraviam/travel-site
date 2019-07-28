const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: "./app/assets/scripts/app.js",
        vendor: "./app/assets/scripts/Vendor.js",
    },
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "[name].js"
    },
    module: {
        rules: [
            {                
                test: /\.js$/,
                exclude: path.join(__dirname, '/(node_modules)/'),
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    }
}