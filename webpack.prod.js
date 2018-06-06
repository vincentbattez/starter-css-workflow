const merge             = require('webpack-merge');
const common            = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob              = require('glob-all');

const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');

const config            = require("./compile.config");

module.exports = merge(common, {
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
          use: [ // use sass + css loader
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(),
                ]
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
        })
      },
    ]
  },
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: js_minification ? [new UglifyJsPlugin()] : []
});