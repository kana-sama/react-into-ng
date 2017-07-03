const path = require("path");

module.exports = {
  entry: ["./src/polyfills.js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "discussions.js",
    library: "Discussions"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    watchContentBase: true
  }
};
