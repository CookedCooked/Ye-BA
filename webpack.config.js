var path = require('path');

module.exports = {
    entry: {
        "hello":path.resolve(__dirname, 'client/public/mp/hello/index.js')

    },
    output: {
        path: "./client/public/build",
        publicPath: "./client/public/build",
        filename: "[name].build.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['babel', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: "vue-html-loader"
            },
            {
                test: /\.sass$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.gif/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/gif"
            },
            {
                test: /\.jpg/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/jpg"
            },
            {
                test: /\.png/,
                loader: "file-loader!url-loader?limit=10000&minetype=image/png"
            },
            {
                test: /\.svg$/,
                loader: "file-loader"
            }
        ]
    },
    resolve: {
        alias: {
            constant: __dirname + "/routes/constant",
            pages: __dirname + "/views",
            lib: __dirname + "/public/javascripts/lib",
        }
    }
}