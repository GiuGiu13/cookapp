const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js', "./src/scss/style.scss"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer:{
        contentBase: './dist'
    }, 
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),

       // extract css into dedicated file
       new MiniCssExtractPlugin({
        filename: './css/bundle.css'
      })
    ],
    optimization: {
        minimizer: [
     
          // enable the css minification plugin
          new OptimizeCSSAssetsPlugin({})
        ]
      },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_module/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
              },
        ]
    }
    
};