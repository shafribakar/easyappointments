var autoprefixer = require('autoprefixer'),
    precss = require('precss');

module.exports = {
    entry: './script.js',
    output: {
        path: __dirname,
        filename: 'script.min.js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015' },
            { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/, loader: 'url?limit=100000' }
        ]
    },
    postcss: function() {
        return [autoprefixer, precss]; 
    }
};