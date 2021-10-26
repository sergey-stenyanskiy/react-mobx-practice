const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '...'],
  },
  module: {
    rules: [
      // {
      //   test: /\.svg$/i,
      //   use: ['@svgr/webpack'],
      // },
      {
        test: /\.svg$/i,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(m|c)?js?x$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.s(a|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              esModule: false
            } 
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          {
            loader: "css-loader",
            options: {
              esModule: false
            } 
          }
        ]
      },
      {
        test: /\.pug$/i,
        use: "pug-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webp|woff|woff2)$/i,
        use: {
          loader: "file-loader",
          options: {
            esModule: false
          }
        }
      }
    ]
  }
}