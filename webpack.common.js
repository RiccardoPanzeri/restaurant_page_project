
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    entry:{
        app:"./src/index.js",
    },
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname, "dist"),
        clean:true,
    },
    module:{
        rules:[{
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],

        },
        {
            test: /\.(png|jpg|gif|svg|jpeg)$/i,
            type: "asset/resource",
        },
        {
            test: /\.(otf|woff|woff2|ttf|eot)$/i,
            type:"asset/resource",
        },
    ]},
    plugins: [
        new HtmlWebpackPlugin({
            title:"Restaurant Page",
            template:"src/index.html",
        })
    ]




}