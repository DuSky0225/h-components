const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const glob = require("glob");
const list = {};
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`);
  for (let file of files) {
    const component = file.split(/[/.]/)[2];
    list[component] = `./${file}`;
  }
}

makeList("components/lib", list);

module.exports = {
  entry: list, //搜寻及递归解析出所有入口依赖的模块。
  mode: "development",
  output: {
    filename: "[name].umd.js", //card.umd.js 输出文件的名称
    path: path.resolve(__dirname, "dist"), //输出文件的本地路径，path的URL是以HTML为基准的
    library: "h", //配置导出库的名称
    libraryTarget: "umd", //配置以何种方式导出库
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    // rules通常用来配置loader 还可以使用后include或者exclude来指定或排除某些文件，加快webpack的搜索效率
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "images/", // 输出到 images 目录
        },
      },
    ],
    // noParse 可以让webpack忽略部分没有采用模块化规范的文件，webpack不会对这些文件进行解析
  },
};
