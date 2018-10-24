const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    entry: {
        main: ['./source/js/main.js', './source/js/prompt.js','./source/js/interactivePrompt.js', './source/scss/app.scss']
    },
    devtool: 'inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
        })
    ],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {

        rules: [{ // regular css files
            test: /\.s?css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        },

        ]
    },
};
