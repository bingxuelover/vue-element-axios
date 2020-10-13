module.exports = {
  transpileDependencies: [],
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  // devServer: {
  //     proxy: {
  //         '/api': {
  //             target: "http://yourserverpath/",
  //             changeOrigin: true,
  //             pathRewrite: { '^/api': '/' }
  //         }
  //     }
  // }
};
