const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: "./app/assets/scripts/app.js"
    },
    output: {
        path: __dirname + "/app/temp/scripts",
        filename: "app.js"
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