/* eslint-env node */
/** @type {import("snowpack").SnowpackUserConfig } */

const CompressionPlugin = require("compression-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-postcss",
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig: (config) => {
          config.module.rules[0] = {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader",
                options: { presets: ["@babel/preset-env"] },
              },
            ],
          };
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
