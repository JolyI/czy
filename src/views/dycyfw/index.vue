<template>
  <div class="page-dycygl">
    <ul>
      <li>
        项目立项
        <i class="el-icon-arrow-right"></i>
      </li>
      <li>立项申请</li>
      <li>预算调整</li>
      <li>项目部申请</li>
    </ul>
    <ul>
      <li>
        项目部申请
        <i class="el-icon-arrow-right"></i>
      </li>
      <li>入账通知单据</li>
      <li>付款申请</li>
      <li>采购合同</li>
      <li>采购付款记录</li>
      <li>采购结算</li>
      <li>付款库</li>
    </ul>
    <ul>
      <li>
        费用核算
        <i class="el-icon-arrow-right"></i>
      </li>
      <li>公费费用</li>
      <li>借款</li>
      <li>差旅费报销</li>
      <li>项目费用</li>
      <li>个人费用报销单</li>
      <li>对公费用报销</li>
    </ul>
    <ul>
      <li>
        销售核算
        <i class="el-icon-arrow-right"></i>
      </li>
      <li>销售合同</li>
      <li>销售收款</li>
      <li>销售开票</li>
      <li>销售子合同</li>
      <li>收款流水记录</li>
      <li>销售出库</li>
      <li>销售结算</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Dycygl',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.page-dycygl {
  padding: 10px 0;
  background-color: #fff;
  border-radius: 8px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    li {
      position: relative;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 42px;
      color: #585858;
      opacity: 1;
      padding: 0 24px;

      &:first-child {
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #343c46;
        opacity: 1;
        i {
          margin-left: 12px;
        }
      }
      &:not(:first-child) {
        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 12px;
          bottom: 12px;
          width: 1px;
          background-color: #e2e2e2;
        }
      }
    }
  }
}
</style>
