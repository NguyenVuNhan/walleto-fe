/** @type {import("snowpack").SnowpackUserConfig } */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          config.plugins.push(new CleanWebpackPlugin());
          config.plugins.push(new CompressionPlugin());
          return config;
        },
      },
    ],
  ],
  routes: [{ match: "routes", src: ".*", dest: "/index.html" }],
  mount: {
    public: { url: "/", static: true },
    src: { url: "/" },
  },
  buildOptions: {
    baseUrl: ".",
  },
};
