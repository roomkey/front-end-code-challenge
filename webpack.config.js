const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']}
    ]
  },
  devServer: {
    port: 3000,
    proxy: {
      "/api/*": {
        target: "http://localhost:3001"
      },
      "*": {
        target: "https://www.roomkey.com",
        headers: {
          'X-Forwarded-Proto': 'https'
        },
        changeOrigin: true,
        bypass: function(req, res, proxyOptions) {
          console.log(req.url);
          if(req.method === 'GET' && !req.headers.accept.match(/json/i)) return true
        }
      }
    },
    stats: {
      hash: false,
      assets: false,
      version: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true
    }
  },
  devtool: 'sourcemap'
}
