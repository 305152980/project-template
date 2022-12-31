const importFn = require.context('./modules/', false, /\.js$/)
let routerModuleList = []
importFn.keys().forEach(path => {
  routerModuleList = [...routerModuleList, ...importFn(path).default]
})

const Layout = () => import('@/views/layout/index.vue')

export default [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [...routerModuleList]
  }
]
