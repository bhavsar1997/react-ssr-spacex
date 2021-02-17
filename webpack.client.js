const path = require('path');

module.exports={
    entry:'./src/client/client.js',
    
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets:[
                        'react',
                        'stage-0',
                        ['env',{targets:{ browsers: ['last 2 versions']}}]
                    ]
                }
            },
            {
                test: /\.css$/,
                loaders: [
                  'style-loader',
                  'css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
                ],
              },
        ],
    }
}