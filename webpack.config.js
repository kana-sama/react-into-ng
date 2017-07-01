const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "chatter.js",
    library: "Chatter"
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
