const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack           = require('webpack');
const path              = require('path');

const config            = require("./compile.config");

module.exports = {
  /*———————————————————————————————————*\
      $ ENTRY
  \*———————————————————————————————————*/
  entry: [
    // 'babel-polyfill',         // ES6
    config.srcPathMain_JS,    // main JS
    config.srcPathMain_SCSS   // main CSS
  ],
  /*———————————————————————————————————*\
      $ OUTPUT
  \*———————————————————————————————————*/
  output: {
    path: config.distPath,       // name of dist folder
    filename: config.distFolder_JS + config.bundle_JS   // name of bundle js
  },    
  resolve: {
    extensions: ['.js']
  },
  module: {
    /*———————————————————————————————————*\
        $ RULES
    \*———————————————————————————————————*/
    rules: [
      /* - - - - - - - - - - - - *\
          $ JS
      \* - - - - - - - - - - - - */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ] // rules
  }, // modules
  /*———————————————————————————————————*\
      $ PLUGINS
  \*———————————————————————————————————*/
  plugins: [
    /* - - - - - - - - - - - - *\
        $ ProvidePlugin
    \* - - - - - - - - - - - - */
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
     }),
    /* - - - - - - - - - - - - - - *\
        $ ExtractTextPlugin (scss)
    \* - - - - - - - - - - - - - - */
    new ExtractTextPlugin({
      // filename: config.bundle_CSS, // name of bundle css + css dist folder
      filename: config.distFolder_CSS + config.bundle_CSS, // name of bundle css + css dist folder
      allChunks: true
    }),
  ],
  /*———————————————————————————————————*\
      $ EXTERNALS
  \*———————————————————————————————————*/
  externals: {
    'jquery': 'jQuery'
  },
}