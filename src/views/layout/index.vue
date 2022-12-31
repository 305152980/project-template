<template>
  <div class="layout-container">
    <el-container>
      <el-aside width="300px">
        <sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <navbar />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'
import Navbar from './Navbar.vue'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {}
  },
  created() {},
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
