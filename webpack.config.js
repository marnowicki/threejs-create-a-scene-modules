const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './main.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CopyPlugin([
            { from: 'index.html', to: './' },
            { from: 'style.css', to: './' }
        ]),
    ],
};