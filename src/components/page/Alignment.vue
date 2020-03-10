<template>
  <div class="page-alignment">
    <h1>测试CSS对齐</h1>
    <el-divider></el-divider>

    <div class="text-center">
      文字水平居中
    </div>

    <div class="wrapper-img">
      <img src="@/assets/imgs/jing.jpeg">
    </div>

    <div class="wrapper-text1">
      容器宽度300；文字水平居中
    </div>
    <div class="wrapper-text2">
      <div class="wrapper-child">容器宽度300；文字水平居中；绝对定位+负边距</div>
    </div>

    <div class="wrapper-text3">
      <div class="wrapper-child">文字未知宽度</div>
    </div>

    <div class="wrapper-text4">
      <div class="wrapper-child">文字未知宽度2(绝对定位+transform)</div>
    </div>

    <div class="clearfloat">
      <div class="wrapper-text5">
        <div class="wrapper-child">文字未知宽度3(浮动)</div>
      </div>
    </div>

    <div class="wrapper-text6">
      <div class="wrapper-child">文字未知宽度4(flex)</div>
    </div>

    <div class="wrapper-text7">文字未知宽度4(fit-content)</div>
  </div>
</template>

<script>
  export default {
    name: 'Alignment',
    props: {
    }
  }
</script>

<style scoped lang="less">
  @import "../../style/variable.less";

  h1 {
    text-align: center;
  }

  .text-center {
    background-color: @color-primary;
  }

  .wrapper-img {
    background-color: @color-orange;
  }

  .text-center,
  .wrapper-img {
    text-align: center;
  }

  .wrapper-text1 {
    width: 300px;
    background-color: @color-primary;
    margin: 0 auto;
    text-align: center;
  }

  .wrapper-text2 {
    position: relative;
    height: 100%;

    .wrapper-child {
      width: 300px;
      position: absolute;
      left: 50%;
      margin-left: -150px;
      background-color: @color-orange;
      text-align: center;
    }
  }

  .wrapper-text3 {
    text-align: center;
    margin-top: 20px;

    .wrapper-child {
      background-color: @color-primary;
      display: inline-block;
    }
  }

  .wrapper-text4 {
    position: relative;

    .wrapper-child {
      position: absolute;
      left: 50%;
      -webkit-transform: translate(-50%, 0);
      transform: translate(-50%, 0);
      background-color: @color-orange;
    }
  }

  .wrapper-text5 {
    position: relative;
    float: left;
    left: 50%;

    .wrapper-child {
      background-color: @color-primary;
      margin-top: 17px;
      position: relative;
      right: 50%;
    }
  }

  .wrapper-text6 {
    position: relative;
    display: flex;
    justify-content: center;

    .wrapper-child {
      background-color: @color-orange;
    }
  }

  .wrapper-text7 {
    background-color: @color-primary;
    width: fit-content;
    margin: 0 auto;
  }
</style>