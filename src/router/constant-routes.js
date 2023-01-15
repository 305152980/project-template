const importFn = require.context('./modules/', false, /\.js$/)
let routerModuleList = []
importFn.keys().forEach(path => {
  routerModuleList = [...routerModuleList, ...importFn(path).default]
})

const layout = () => import('@/views/layout/index.vue')

export default [
  {
    path: '/',
    component: layout,
    redirect: '/demoOne',
    children: [...routerModuleList]
  }
]
