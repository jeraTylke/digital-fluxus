const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    target: 'node',
    entry: {
        main: ['./source/js/promptGenerator.js', './source/scss/app.scss']
        // main: ['./source/js/main.js', './source/js/prompt.js','./source/js/interactivePrompt.js', './source/js/promptGenerator.js', './source/scss/app.scss']
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
