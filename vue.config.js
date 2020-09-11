/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.plugin('define').tap((args) => {
      const v = JSON.stringify(require('./package.json').version)
      args[0]['process.env'].VERSION = v
      return args
    })
  },
  publicPath:
    process.env.NODE_ENV === 'production' ? '/github-manager-explore/' : '/'
}
