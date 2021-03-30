/* eslint-env node */
/** @type {import("snowpack").SnowpackUserConfig } */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-babel",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-postcss",
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          config.plugins.push(new CleanWebpackPlugin());
          config.plugins.push(new CompressionPlugin());
          config.plugins.push(
            new HtmlWebpackPlugin({
              template: `${__dirname}/public/index.html`,
              favicon: `${__dirname}/public/favicon.ico`,
              minify: true,
              title: "Walleto",
            })
          );
          return config;
        },
      },
    ],
  ],
  packageOptions: {
    types: true,
  },
  buildOptions: {
    out: "build",
    sourcemap: true,
  },
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  mount: {
    public: "/",
    src: "/",
  },
  alias: {
    src: "./src",
  },
};
