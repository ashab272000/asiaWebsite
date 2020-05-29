const path = require('path');

const entryPath = './src/Screens'
module.exports = {
    //entry: './src/index.js',
    entry: {  
        'js/main': `${entryPath}/index.js`,
        'js/second': `${entryPath}/chooseColor.js`
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
}