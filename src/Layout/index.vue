<template>
  <el-container class="layout">
    <el-header>
      <my-header />
    </el-header>
    <el-main>
      <el-container>
        <el-aside>
          <my-aside />
        </el-aside>
        <el-main class="main">
          <transition name="fade"
            mode="out-in">
            <div class="branch"
              v-if="path!=='/dashboard'">
              <i class="icon icon-map"></i>
              <span class="title">当前位置：</span>
              <span class="location">{{title}}</span>
            </div>
          </transition>
          <transition name="fade-transform"
            mode="out-in">
            <router-view />
          </transition>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
import myAside from './aside.vue'
import myHeader from './header'
export default {
  name: 'Layout',
  components: {
    myAside,
    myHeader
  },
  data () {
    return {
      title: '',
      path: ''
    }
  },
  watch: {
    '$route': {
      handler (nval, oval) {
        this.title = nval.meta.title
        this.path = nval.path
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.layout {
  /deep/.el-header {
    height: 80px !important;
    background: #1b79b7;
    padding: 0;
    min-width: 1200px;
  }

  .el-container {
    height: 100%;
  }
  .el-main {
    padding: 0;
  }
  .el-aside {
    width: 220px !important ;
    height: calc(100vh - 80px);
    background: #ffffff;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.08);
    padding: 0;
  }
  .main {
    background: #f6f6f8;
    height: calc(100vh - 80px);
    padding: 0 30px;
  }
  .branch {
    font-size: 14px;
    font-family: Microsoft YaHei;
    line-height: 62px;
    color: #0084ff;
    opacity: 1;
    .title {
      color: #585858;
      margin: 0 3px 0 5px;
    }
    .location {
      font-weight: 400;
    }
  }
  .icon-map {
    background-image: url("../assets/map.png");
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    speak: none;
    background-size: 100% 100%;
    width: 12px;
    height: 16px;
  }
}
</style>
