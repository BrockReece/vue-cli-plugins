module.exports = (api, options) => {
  api.extendPackage({
    dependencies: {
      'vue-kanban': '^1.6.1'
    }
  })

  api.injectImports(api.entryFile, `import './plugins/vue-kanban'`)
  api.render('./template', options)
}