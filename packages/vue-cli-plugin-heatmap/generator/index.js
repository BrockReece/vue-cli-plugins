module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-heatmapjs': '^1.4.0'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/vue-heatmapjs'`)
  api.render('./template', options)
}