const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  module: {
    rules: [      
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
    ],
  
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'main.html',
    }),
    new MiniCssExtractPlugin({
        filename: 'main.css',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: 'main.html' },
      ],
    },
  }
}
