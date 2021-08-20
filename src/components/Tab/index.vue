<template>
  <div class="custom-tab">
    <div :class="{'tab-item':true,active:tabIndex===index}"
      @click="tabIndex=index"
      v-for="(item,index) in list"
      :key="index">{{item.label}}</div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-tab {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 42px;
  background-color: #fff;
  line-height: 52px;
  height: 53px;
  border-radius: 8px 8px 0 0;
  &::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 0;
    height: 1px;
    background-color: #e6e6e6;
  }
  .tab-item {
    position: relative;
    font-size: 14px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #585858;
    min-width: 85px;
    text-align: center;
    height: 53px;
    cursor: pointer;
    &.active {
      border-bottom: 3px solid #0084ff;
    }
  }
}
</style>
