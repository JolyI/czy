<template>
  <div class="page-dashboard page">
    <ul class="custom-ul">
      <li>
        <img style="width: 42.25px; height: 41px;"
          src="../../assets/gxrwc.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">共享任务池</span>
      </li>
      <li>
        <img style="width: 42.25px; height: 42px;"
          src="../../assets/jhkcx.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">借还款查询</span>
      </li>
      <li>
        <img style="width: 41.5px; height: 42px;"
          src="../../assets/skxx.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">收款信息</span>
      </li>
      <li>
        <img style="width: 41px; height: 42px;"
          src="../../assets/dgfybx.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">对公费用报销</span>
      </li>
      <li>
        <img style="width: 42.43px; height: 42.18px;"
          src="../../assets/jkdgyf.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">借款/对公预付</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.page-dashboard {
}
</style>
