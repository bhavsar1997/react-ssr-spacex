const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports={
target: 'node',
entry:'./src/index.js',
output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'build')
},
externals: [webpackNodeExternals()],
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
            loader: 'css-loader/locals?module&localIdentName=[name]__[local]___[hash:base64:5]'
          }
    ],
}
};
