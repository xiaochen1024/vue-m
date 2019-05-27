//官方vue.config.js 参考文档 https://cli.vuejs.org/zh/config/#css-loaderoptions
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require("autoprefixer")({}),
          require("postcss-pxtorem")({
            rootValue: 35.5,
            unitPrecision: 5,
            propList: ["*", "!font*"],
            selectorBlackList: [],
            minPixelValue: 1
          })
        ]
      }
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.mode = "production";
      let optimization = {
        runtimeChunk: "single",
        splitChunks: {
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 20000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name(module) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )[1];
                return `npm.${packageName.replace("@", "")}`;
              }
            }
          }
        }
      };
      Object.assign(config, {
        optimization
      });
    } else {
      config.mode = "development";
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("images", resolve("src/images"))
      .set("styles", resolve("src/styles"))
      .set("components", resolve("src/components"))
      .set("pages", resolve("src/pages"))
      .set("mixin", resolve("src/mixin"));
    if (process.env.IS_ANALYZ) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }
  }
};
