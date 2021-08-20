<template>
  <ul class="aside">
    <router-link tag="li"
      :to="route.path"
      active-class="active"
      v-for="(route,index) in list"
      :key="index">
      <i :class="`icon  icon-${route.meta.icon} ${route.path===path?'active':''}`"></i>
      <span class="title">
        {{route.meta.title}}
      </span>
    </router-link>
  </ul>
</template>
<script>
import { constantRoutes } from '@/router'
export default {
  name: 'Aside',
  data () {
    return {
      path: '',
      list: []
    }
  },
  watch: {
    '$route.path': {
      handler (nval, oval) {
        this.path = nval.substr(1, nval.length)
      },
      immediate: true
    }
  },
  created () {
    // this.path = this.$route.path.substr(1, this.$route.path.length)

    constantRoutes && constantRoutes.length && constantRoutes.map(item => {
      if (item.path === '/') {
        const children = item.children
        children?.length && children.map(child => {
          this.list.push({
            ...child
          })
        })
      }
    })
  }

}
</script>
<style lang="scss" scoped>
.icon {
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
  width: 24px;
  height: 24px;
}
.aside {
  margin: 0;
  padding: 46px 0;
  li {
    cursor: pointer;
    height: 60px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0 0 0 46px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 21px;
    color: #585858;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .title {
      margin-left: 22px;
    }
    .icon {
      width: 28px;
      height: 25px;
    }
    .icon-dashboard {
      background-image: url("../icons/aside/dashboard.png");
      &.active {
        background-image: url("../icons/aside/dashboard_show.png");
      }
    }
    .icon-grgzt {
      background-image: url("../icons/aside/grgzt.png");
      &.active {
        background-image: url("../icons/aside/grgzt_show.png");
      }
    }
    .icon-fybx {
      background-image: url("../icons/aside/fybx.png");
      &.active {
        background-image: url("../icons/aside/fybx_show.png");
      }
    }
    .icon-ysyf {
      background-image: url("../icons/aside/ysyf.png");
      &.active {
        background-image: url("../icons/aside/ysyf_show.png");
      }
    }
    .icon-dycyfw {
      background-image: url("../icons/aside/dycyfw.png");
      &.active {
        background-image: url("../icons/aside/dycyfw_show.png");
      }
    }
    .icon-gchtgl {
      background-image: url("../icons/aside/gchtgl.png");
      &.active {
        background-image: url("../icons/aside/gchtgl_show.png");
      }
    }
    .icon-zjsf {
      background-image: url("../icons/aside/zjsf.png");
      &.active {
        background-image: url("../icons/aside/zjsf_show.png");
      }
    }
    .icon-qtxt {
      background-image: url("../icons/aside/qtxt.png");
      &.active {
        background-image: url("../icons/aside/qtxt_show.png");
      }
    }
    .icon-cygn {
      background-image: url("../icons/aside/cygn.png");
      &.active {
        background-image: url("../icons/aside/cygn_show.png");
      }
    }
    .icon-bzzx {
      background-image: url("../icons/aside/bzzx.png");
      &.active {
        background-image: url("../icons/aside/bzzx_show.png");
      }
    }

    &.active,
    &:active,
    &:hover {
      background: #f6f6f8;
      color: #585858;
    }
  }
}
</style>
