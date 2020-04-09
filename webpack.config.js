const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/index.js'],
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

        new MiniCssExtractPlugin({
            filename: "css/bundle.css"
          })
    ],
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
                // Apply rule for .sass, .scss or .css files
                test: /\.(sa|sc|c)ss$/,
          
                // Set loaders to transform files.
                // Loaders are applying from right to left(!)
                // The first loader will be applied after others
                use: [
                    {
                        // After all CSS loaders we use plugin to do his work.
                        // It gets all transformed CSS and extracts it into separate
                        // single bundled file
                        loader: MiniCssExtractPlugin.loader
                      }, 
                      {
                        loader: "css-loader",
                      },
                     ]
              },
        ]
    }
    
};