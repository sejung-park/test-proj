var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename:'bundle.js', // 없어도 됨 기본이름은 main.js 임
        publicPath:'/dist', //dev-server 를 위해
        //path:path.resolve(__dirname, 'dist') // 없어도 됨, dist 경로가 기본 설정으로 됨
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: [
                  "@babel/preset-env"
                ]
            }
          }
        }
      ]
    }
  };