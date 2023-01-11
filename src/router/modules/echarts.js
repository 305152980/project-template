const MapJs = () => import('@/views/echarts/mapJs/index.vue')
const MapJson = () => import('@/views/echarts/mapJson/index.vue')

export default [
  {
    path: '/mapJs',
    name: 'mapJs',
    component: MapJs
  },
  {
    path: '/mapJson',
    name: 'mapJson',
    component: MapJson
  }
]
