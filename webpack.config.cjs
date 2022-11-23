const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: './main.js',
    node: {
        fs: 'empty',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        libraryTarget: 'commonjs',
        filename: 'test.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
        ],
    },
    stats: {
        colors: true,
    },
    target: 'web',
    externals: /^(k6|https?\:\/\/)(\/.*)?/,
    devtool: 'source-map',
    plugins: [new Dotenv()],
};
