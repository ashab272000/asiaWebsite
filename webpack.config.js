const path = require('path');

const entryPath = './src/Screens'
module.exports = {
    //entry: './src/index.js',
    //watch: true,
    entry:{  
            'index': ["babel-polyfill", `${entryPath}/index.js`],
            'decorateScreen': ["babel-polyfill",`${entryPath}/decorateScreen.js`],
    },
    /*
    devServer:{
        contentBase: './dist',
    },*/
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/js'),
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
    }
}