const path = require('path');

const entryPath = './src/Screens'
module.exports = {
    //entry: './src/index.js',
    entry:{  
            'js/main': ["babel-polyfill", `${entryPath}/index.js`],
            'js/second': ["babel-polyfill",`${entryPath}/decorateScreen.js`],
        },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist/js/trial'),
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