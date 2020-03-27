const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            emitError: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      handlers: path.resolve(__dirname, 'src/event-handlers'),
      utils: path.resolve(__dirname, 'src/utils'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: path.resolve(__dirname, 'src/assets/index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 4200,
  },
  devtool: '#eval-source-map',
};
