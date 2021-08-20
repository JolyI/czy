<template>
  <el-row class="header">
    <el-col :span="4"
      class="col-item logo">
      <img src="../assets/logo.png"
        alt="">
    </el-col>
    <el-col class="col-item title"
      :span="5">
      河钢集团财智云科技有限公司
    </el-col>
    <el-col class="col-item search"
      :offset="1">
      <input placeholder="搜功能/同事"
        v-model="key" />
      <i class="icon icon-search"></i>
    </el-col>
    <el-col class="col-item links">
      <ul>
        <router-link to="cygn"
          tag="li">常用功能</router-link>
        <li>应用</li>
        <li>流程</li>
        <li>我的财智云</li>
        <li>
          <img class="date"
            src="../assets/date.png"
            alt="">
        </li>
        <li>
          <img class="date"
            src="../assets/message.png"
            alt="">
        </li>
        <li class="personal">
          <img class="avator"
            src="../assets/avator.png"
            alt="">
          <span class="name">张某某</span>
        </li>
      </ul>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      key: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  .col-item {
    position: relative;
    &.logo {
      margin-left: 43px;
      // margin-top: 10px;
      min-width: 152px;
    }
    &.title {
      min-width: 260px;
      margin-left: 10px;
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      line-height: 26px;
      color: #ffffff;
      opacity: 1;
    }
    &.search {
      position: relative;
      width: 292px !important;
      input {
        outline: none;
        height: 40px;
        width: 292px;
        background: #ffffff;
        opacity: 1;
        border-radius: 22px;
        border: none;
        padding: 0 45px 0 20px;
        font-size: 12px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        line-height: 19px;
        color: #b1b1b1;
        opacity: 1;
        transition: all 1s;

        &::placeholder {
          color: #dddddd;
        }
      }

      .icon-search {
        background-image: url("../assets/search.png");
        width: 28px;
        height: 28px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &.links {
      flex: 1;
      text-align: right;
      margin-left: 10px;
      min-width: 527px;
      ul {
        list-style: none;
        margin: 0;
        padding: 0 20px 0 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        background: #1b79b7;
        height: 80px;
        li {
          font-size: 18px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          line-height: 24px;
          color: #ffffff;
          margin-right: 10px;
          cursor: pointer;
          &:last-child {
            margin-right: 0;
          }
          &.date {
            width: 41px;
            height: 28px;
          }
          &.personal {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .avator {
              width: 45px;
              height: 45px;
              background: #ffffff;
              border-radius: 50%;
            }
            .name {
              font-size: 18px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              line-height: 24px;
              color: #ffffff;
              opacity: 1;
              margin-left: 4px;
            }
          }
        }
      }
    }
  }
}
</style>
