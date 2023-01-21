import {merge} from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
});
