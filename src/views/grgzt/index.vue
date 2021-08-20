<template>
  <div class="page-grgzt page">
    <tab :list="[{label:'费用报销'},{label:'收款'}]" />
    <ul class="custom-ul">
      <li>
        <img style="width: 42.43px; height: 42.18px;"
          src="../../assets/jkdgyf.png"
          alt="">
        <div style="height: 13.82px;"></div>
        <span class="desc">借款</span>
      </li>
      <li>
        <img style="width: 40.67px; height: 41.16px;"
          src="../../assets/grfybx.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">个人费用报销</span>
      </li>
      <li>
        <img style="width: 37.37px; height: 42px;"
          src="../../assets/dgfybxd.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">对公费用报销单</span>
      </li>
      <li>
        <img style="width: 40.24px; height: 42px;"
          src="../../assets/ccsq.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">出差申请</span>
      </li>
      <li>
        <img style="width: 55px; height: 42px;"
          src="../../assets/clfbxd.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">差旅费报销</span>
      </li>
      <li>
        <img style="width: 36.87px; height: 42px;"
          src="../../assets/fysq.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">费用申请</span>
      </li>
      <li>
        <img style="width: 37.39px; height: 42px;"
          src="../../assets/gcfybxd.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">供应链对公入帐单</span>
      </li>
      <li>
        <img style="width: 47.8px; height: 42px;"
          src="../../assets/xjhkd.png"
          alt="">
        <div style="height: 14px;"></div>
        <span class="desc">现金还款单</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Grgzt',
  data () {
    return {
      tabIndex: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.page-grgzt {
}
</style>
