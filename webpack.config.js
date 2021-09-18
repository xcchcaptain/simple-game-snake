/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const path = require("path");
const ROOT = path.resolve(__dirname, "src");
const DESTINATION = path.resolve(__dirname, "dist");

module.exports = {
  mode: "none",
  context: ROOT,
  target: ["web", "es5"],
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new ESLintPlugin({
      extensions: [".tsx", ".ts", ".js"],
      exclude: "node_modules",
    }),
    new VueLoaderPlugin(),
    /** toFix:Uncaught ReferenceError: process is not defined shared.esm-bundler.js:472 **/
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],

  entry: {
    main: "./main.ts",
  },

  output: {
    filename: "[name].[chunkhash:8].js",
    path: DESTINATION,
    clean: true,
  },

  resolve: {
    extensions: [".ts", ".js"],
    modules: [ROOT, "node_modules"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  devtool: "inline-source-map",
  devServer: {},
};
