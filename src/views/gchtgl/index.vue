<template>
  <div class="page-gchtcxgl">
    <ul>
      <li class="bold">
        项目合同管理 <i class="el-icon-arrow-right"></i>
      </li>
      <li>在建工程台账</li>
      <li>在建工程台账-业务</li>
      <li>在建工程台账供应商对照表</li>
      <li>能源合同台账</li>
      <li>设备零购台账</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Gchtcxgl',
  data () {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.page-gchtcxgl {
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
