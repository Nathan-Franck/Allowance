const path = require('path');
const fs = require('fs');

const outputFileName = "index";
const outputFilePath = "./";

module.exports = {
    mode: "production",
    entry: {
        [outputFileName]: './App.tsx',
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
    plugins: [
        // 📝 Update version file so browser caches will be invalidated with new version
        {
            apply: compiler => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                    const buildInfo = {
                        timestamp: Date.now(),
                    };
                    fs.writeFile(
                        "./buildInfo.json",
                        JSON.stringify(buildInfo, null, 4),
                        (err) => {
                            if (err) {
                                console.error(err);
                                return;
                            }
                        }
                    );
                });
            },
        }
    ],
};