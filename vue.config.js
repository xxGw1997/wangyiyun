module.exports = {
    configureWebpack: {
        resolve: {
          extensions:['.js','.vue','.json'],
          alias: {
            'assets': '@/assets',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
          }
        }
      }
}