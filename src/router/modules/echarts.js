const mapJs = () => import('@/views/echarts/map-js/index.vue')
const mapJson = () => import('@/views/echarts/map-json/index.vue')

export default [
  {
    path: '/mapJs',
    name: 'MapJs',
    component: mapJs
  },
  {
    path: '/mapJson',
    name: 'MapJson',
    component: mapJson
  }
]
