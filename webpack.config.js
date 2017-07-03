const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "discussions.js",
    library: "Discussions"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true
  }
};
