module.exports = {
  transpileDependencies: ['vuetify'],
  runtimeCompiler: true,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: []
  }
}
