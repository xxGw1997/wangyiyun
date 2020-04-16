module.exports = {
  lintOnSave: false,
  publicPath:'./',//傻嗨，看这行，如果没有用就把这行删除就ok了
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
