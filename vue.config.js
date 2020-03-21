module.exports = {
  lintOnSave: false,

  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json"],
      alias: {
        assets: "@/assets",
        components: "@/components",
        network: "@/network",
        views: "@/views",
        network: "@/network",
        utils: "@/utils"
      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: []
      }
    }
  },

  pluginOptions: {
    "cube-ui": {
      postCompile: false,
      theme: false
    }
  }
};
