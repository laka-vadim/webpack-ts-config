import path from 'path';
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname  = path.dirname(__filename);

const entryFile  = './src/index.ts';
const outputFile = 'bundle.js';
const outputPath = path.resolve(__dirname, '../dist');


const configuration: Configuration = {
    entry: entryFile,
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: outputPath,
        filename: outputFile,
        clean: true,
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My Build Example'
    })],
};

export default configuration;
