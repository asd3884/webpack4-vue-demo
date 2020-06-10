
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack=require('webpack')
const HTMLPlugin=require('html-webpack-plugin')
const isDev=process.env.NODE_ENV==='development'


module.exports  = {
    target:'web',
    mode: 'development',
    entry: path.join(__dirname,'src/index.js'),  
    devServer: {
      //  contentBase: './dist',
        host: '0.0.0.0',
        port: 8000,
        overlay:{
            errors:true,
        }
    },

    output:{
        filename: 'bundle.js',
        path: path.join(__dirname,'dist')
    },
    module: {
        rules: [
            //加载vue
            {test:/\.vue$/,loader: 'vue-loader'},
            //css文件处理
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            //css预处理文件
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            //图片处理
            {test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[{
                    loader: 'url-loader',
                    options: {
                        
                        limit: 1024,
                        name: '[name]-aaa.[ext]'
                    }
                }]
            }
        

        

        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLPlugin()
      
       
    ]
   
}

