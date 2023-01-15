<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="300px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header>
          <NavBar />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from './side-bar.vue'
import NavBar from './nav-bar.vue'
export default {
  name: 'Layout',
  components: {
    SideBar,
    NavBar
  },
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.layout-container {
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      height: 100%;
      background-color: #d3dce6;
    }
    .el-header {
      background-color: #b3c0d1;
    }
  }
}
</style>
