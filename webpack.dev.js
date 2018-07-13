const merge              = require('webpack-merge');
const common             = require('./webpack.common.js');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const config             = require("./compile.config");

let devtool = (config.sourcemap) ? 'source-map' : ' ';
module.exports = merge(common, {
  devtool: devtool, // Active les source-map selon la config choisie
  module: {
    /*———————————————————————————————————*\
        $ RULES
    \*———————————————————————————————————*/
    rules: [
      /* - - - - - - - - - - - - *\
          $ SASS
      \* - - - - - - - - - - - - */
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: config.sourcemap,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(), // concat les médias
                ],
                sourceMap: config.sourcemap,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: config.sourcemap
              }
            },
          ],
        })
      },
  ]},
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: [
    /* - - - - - - - - - - - - *\
        $ CleanWebpackPlugin
    \* - - - - - - - - - - - - */
    new CleanWebpackPlugin([config.distPath])
  ],
});