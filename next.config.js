const withImage = require('next-images')

module.exports = withImage({
    
        module: {
            loaders: [{
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                cacheDirectory: true,
                presets: ['react', 'es2015']
                }
            }
            ],
            rules: [{
                test: /\.(jpg|png|jpeg|gif|jp2|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }, ],
        },
        trailingSlash: true,
    })