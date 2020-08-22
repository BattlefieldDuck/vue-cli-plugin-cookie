module.exports = (api, options = {}, rootOptions = {}) => {
  const isVue3 = (rootOptions.vueVersion === '3')

  api.injectImports(api.entryFile, `import cookie from './plugins/cookie'`)

  if (isVue3) {
    api.transformScript(api.entryFile, require('./injectUseCookie'))
  } else {
    api.injectRootOptions(api.entryFile, `cookie`)
  }

  api.render('./template', { ...options, })
}
