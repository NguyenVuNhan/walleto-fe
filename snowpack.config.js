const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
          return config;
        },
      },
    ],
  ],
  mount: {
    public: { url: "/", static: true },
    src: { url: "/" },
  },
  buildOptions: {
    baseUrl: ".",
  },
};
