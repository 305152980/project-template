const importFn = require.context('./modules/', false, /\.js$/)
let routerModuleList = []
importFn.keys().forEach(path => {
  routerModuleList = [...routerModuleList, ...importFn(path).default]
})

export default [...routerModuleList]
