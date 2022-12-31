<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import DevicePixelRatio from '@/utils/devicePixelRatio.js'
export default {
  name: 'App',
  created() {
    // new DevicePixelRatio().init()
  }
}
</script>

<style lang="scss"></style>
