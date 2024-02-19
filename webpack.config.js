// webpack.config.js

const path = require('path');

module.exports = {
  // Your existing webpack configuration...

  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "path": require.resolve("path-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "fs": false, // or require.resolve("fs") if needed
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "zlib": require.resolve("browserify-zlib"),
      "crypto": require.resolve("crypto-browserify"),
      "buffer": require.resolve("buffer/"),
    },
  },
};
