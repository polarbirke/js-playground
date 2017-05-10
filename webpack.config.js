const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProd = (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'prod');

module.exports = [
    // main bundle configuration
    {
        entry: './src/main.js',
        output: {
            filename: 'ck.core.tracking.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                // rules for modules (configure loaders, parser options, etc.)

                {
                    test: /\.js$/,
                    exclude: [
                        /(node_modules|test)/
                    ],
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [ 'es2015', { modules: 'amd' } ]
                        ]
                    }
                }
            ]
        },
        plugins: isProd ? [
            new UglifyJSPlugin()
        ] : [
            new UglifyJSPlugin()
        ]
    }
];