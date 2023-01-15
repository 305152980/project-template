<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import DevicePixelRatio from '@/utils/device-pixel-ratio.js'
export default {
  name: 'App',
  created() {
    // new DevicePixelRatio().init()
  }
}
</script>

<style lang="scss"></style>
