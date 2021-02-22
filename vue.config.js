const webpack = require("webpack");
const path = require("path");

const CONSTANTS = {
  POSTS_PER_PAGE: JSON.stringify(process.env.POSTS_PER_PAGE),
  REQUEST_CACHE_MAX: JSON.stringify(process.env.REQUEST_CACHE_MAX),
  REST_ENDPOINT: JSON.stringify(process.env.REST_ENDPOINT),
  GA_TRACKING_ID: JSON.stringify(process.env.GA_TRACKING_ID)
};

module.exports = {
  pwa: {
    themeColor: "#42b983",
    msTileColor: "#42b983",
    appleMobileWebAppCache: "yes",
    manifestOptions: {
      background_color: "#42b983"
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [
        path.resolve(__dirname, "./src/assets/scss/_variables.scss"),
        path.resolve(__dirname, "./src/assets/scss/_mixins.scss")
      ]
    }
  },
  configureWebpack: {
    plugins: [new webpack.DefinePlugin(CONSTANTS)],
    
  }
};
