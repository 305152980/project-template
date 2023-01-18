<template>
  <div class="map-json-container">
    <div id="mapBox" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import { provinceNameMapOne, provinceNameMapTwo } from '@/constants/map/province-name-map.js'
import * as echarts from 'echarts'
export default {
  name: 'MapJson',
  data() {
    return {
      map: null,
      title: '中国地图'
    }
  },
  created() {},
  mounted() {
    this.initChinaMap()
  },
  methods: {
    async initChinaMap() {
      var option = {
        title: {
          text: `${this.title}地图`,
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            label: {
              show: true
            },
            zoom: 1.4,
            top: 145,
            nameMap: provinceNameMapOne,
            data: []
          }
        ]
      }

      const chinaJsonData = await import('@/constants/map/china.json')
      echarts.registerMap('china', chinaJsonData)
      this.map = echarts.init(document.getElementById('mapBox'))
      this.map.setOption(option)

      this.map.on('click', async params => {
        console.log(111, params.name)
        console.log(222, provinceNameMapTwo[params.name])
        const provinceJsonData = await import(
          '@/constants/map/province/' + provinceNameMapTwo[params.name] + '.json'
        )
        // const provinceJsonData = await import(`@/constants/map/province/${provinceNameMapTwo[params.name]}.json`)
        console.log(333, provinceJsonData)
        this.title = params.name
        echarts.registerMap(provinceNameMapTwo[params.name], provinceJsonData)
        // // t
        this.renderMap(provinceNameMapTwo[params.name], [])
      })

      this.map.getZr().on('click', params => {})
    },
    renderMap(map, data) {
      const option = {
        title: {
          text: `${this.title}地图`,
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            type: 'map',
            map: map,
            label: {
              show: true
            },
            zoom: 1,
            data: data
          }
        ]
      }
      this.map.setOption(option, { replaceMerge: ['series'] })
    }
  }
}
</script>

<style lang="scss" scoped>
.map-json-container {
  height: 100%;
}
</style>
