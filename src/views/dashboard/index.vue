<template>
  <div class="page-dashboard">
    <div class="card">
      <div :class="{'card-item':true,active:cardIndex===0}"
        @click="handleTab(0)">
        待办事项
      </div>
      <div :class="{'card-item':true,active:cardIndex===1}"
        @click="handleTab(1)">
        通知消息</div>
    </div>
    <tab :list="[{label:'待办'},{label:'传阅'}]" />

    <ul class="container">
      <li v-for="i in 100"
        :key="i">
        <el-image :src="require('.././../assets/dgfybxd.png')"
          alt=""
          class="avator" />
        <span class="content">请提交单据：付款单1286384689349027生成的凭证</span>
        <span class="name">冯梦洁</span>
        <span class="date">2021-08-12 17:13:05</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      cardIndex: 0,
      tabIndex: 0
    }
  },
  methods: {
    handleTab (val) {
      this.cardIndex = val
    }
  }
}
</script>
<style lang="scss" scoped>
.page-dashboard {
  margin-top: 30px;
  .card {
    display: flex;
    flex-direction: row;
    justify-items: flex-start;
    align-items: center;
    .card-item {
      width: 120px;
      height: 38px;
      background: #ffffff;
      opacity: 1;
      text-align: center;
      line-height: 38px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #585858;
      border-radius: 10px 10px 0px 0px;
      cursor: pointer;
      &:last-child {
        border-radius: 10px 10px 0px 0px;
      }

      &.active {
        background-color: #46a1ec;
        color: #fff;
      }
    }
  }
  .tab {
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
  .container {
    background-color: #fff;
    min-height: calc(100vh - 200px);
    list-style: none;
    padding-bottom: 50px;
    li {
      padding: 23px 42px 0 42px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .avator {
        width: 23px;
        height: 28px;
        margin-right: 23px;
      }
      .content {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 19px;
        color: #0084ff;
        opacity: 1;
        margin-right: 20px;
      }
      .name {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 19px;
        color: #8e8e8e;
        opacity: 1;
        margin-right: 20px;
      }
      .date {
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 19px;
        color: #8e8e8e;
        opacity: 1;
      }
    }
  }
}
</style>
