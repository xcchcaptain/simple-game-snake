/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');

module.exports = {
    mode: "none",
    context: ROOT,
    target: ['web', 'es5'],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
        new ESLintPlugin({
            extensions: ['.tsx', '.ts', '.js'],
            exclude: 'node_modules'
        })
    ],

    entry: {
        'main': './main.ts'
    },

    output: {
        filename: '[name].[hash:8].js',
        path: DESTINATION,
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: [/node_modules/],
                use: ['babel-loader', 'ts-loader']
            },
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    "postcss-loader",
                    'less-loader'
                ]
            }
        ]
    },

    devtool: 'inline-source-map',
    devServer: {}
};