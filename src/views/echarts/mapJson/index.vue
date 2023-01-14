<template>
  <div class="mapJson-container">
    <div id="mapBox" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'MapJson',
  data() {
    return {
      chinaMap: null
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
          text: '中国地图',
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            type: 'map',
            map: 'china',
            zoom: 1.4,
            top: 145,
            data: []
          }
        ]
      }

      const chinaJsonData = await import('@/apis/constant/map/china.json')
      echarts.registerMap('china', chinaJsonData)
      this.chinaMap = echarts.init(document.getElementById('mapBox'))
      this.chinaMap.setOption(option)

      this.chinaMap.on('click', params => {})

      this.chinaMap.getZr().on('click', params => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.mapJson-container {
  height: 100%;
}
</style>
