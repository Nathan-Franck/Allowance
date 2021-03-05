const path = require('path');

const outputFileName = "index";
const outputFilePath = "./";

module.exports = {
    mode: "development",
    entry: {
        [outputFileName]: './index.tsx',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js',
        ],
        modules: ['node_modules'],
    },
    target: 'node',
    output: {
        path: path.resolve(__dirname, outputFilePath),
        filename: '[name].js',
    },
};