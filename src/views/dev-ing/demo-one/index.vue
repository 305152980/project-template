<template>
  <div class="demo-one-container">
    <div id="baduMapBox"></div>
  </div>
</template>

<script>
export default {
  name: 'DemoOne',
  data() {
    return {
      baduMap: null
    }
  },
  created() {},
  mounted() {
    this.initBaduMap()
  },
  methods: {
    initBaduMap() {
      // 创建地图实例。
      // eslint-disable-next-line no-undef
      this.baduMap = new BMapGL.Map('baduMapBox')
      // 设置中心点坐标。
      // eslint-disable-next-line no-undef
      var point = new BMapGL.Point(108.924, 34.541)
      // 地图初始化，同时设置地图展示级别。(3 - 19)
      this.baduMap.centerAndZoom(point, 4)
      // 开启鼠标滚轮缩放。
      this.baduMap.enableScrollWheelZoom(true)
      // 为地图添加控件。
      // eslint-disable-next-line no-undef
      this.baduMap.addControl(new BMapGL.LocationControl())
      // eslint-disable-next-line no-undef
      this.baduMap.addControl(new BMapGL.ScaleControl())
      // eslint-disable-next-line no-undef
      this.baduMap.addControl(new BMapGL.ZoomControl())
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-one-container {
  #baduMapBox {
    width: 600px;
    height: 450px;
    margin: 0 auto;
    border: 1px #000000 solid;
  }
}
</style>
