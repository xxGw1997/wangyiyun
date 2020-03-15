module.exports = {
    lintOnSave:false,
    configureWebpack: {
        resolve: {
          extensions:['.js','.vue','.json'],
          alias: {
            'assets': '@/assets',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
            'network':'@/network',
            'utils':'@/utils'
          }
        }
      }
}