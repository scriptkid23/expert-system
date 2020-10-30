const path = require("path");
const webpack = require('webpack');
const config = {
  entry: {
    vendor: ["@babel/polyfill", "react"],
    app: ["./index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.css$/,
        use: [
             {
                loader: 'style-loader'
             }, 
             {
                loader: 'css-loader',
                options: {
                   importLoader: 1,
                   modules: true,
                   localIdentName: '[name]_[local]__[hash:base64:5]'
                }
             }
        ]
    }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"]
  }
};

module.exports = config;
