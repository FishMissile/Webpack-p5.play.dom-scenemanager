var path = require('path')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist'
    },
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
              },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        headers: {
            'Devserveer': 'server'
        },
        compress: true,
        host: 'localhost',
        disableHostCheck: true,
        port: 8080,
        hot: true,
        open: true,
    },
};