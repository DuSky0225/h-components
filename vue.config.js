const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  transpileDependencies: true,
  lintOnSave: false, //eslint检验开关
  // module: {
  //   rules: [
  //     {
  //       test: /\.(png|svg|gif)$/i,
  //       use: [
  //         {
  //           loader: "file-loader",
  //           options: {
  //             outputPath: "imgs",
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
});
