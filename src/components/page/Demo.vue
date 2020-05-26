<template>
  <div class="page-demo">
    <h1 @click="drawer = true">演示页面</h1>
    <p>来自node服务的数据：{{dataNodeApi}}</p>
    <el-drawer title="菜单" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <div class="menu-wrap">
        <router-link to="/alignment">CSS对齐</router-link>
        <router-link to="/alignment1">待开发</router-link>
      </div>
    </el-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
   import { testNode} from "@/service/test.js";

  export default {
    name: 'DemoHome',
    data() {
      return {
        drawer: false,
        direction: 'rtl',
        dataNodeApi: ''
      }
    },
    mounted() {
      testNode().then((res)=>{
        this.dataNodeApi = res.content;
      })
    },
    methods: {
      handleClose(done) {
        done();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../../style/variable.less";
  h1 {
    background-color: @color-dark-green;
    margin: 0;
    padding: 10px 0;
    color: @text-color-light;
    text-align: center;
  }

  .menu-wrap {
    margin: 0 15px;
    a {
      display: block;
      &.router-link-active{
      }
    }
  }
</style>