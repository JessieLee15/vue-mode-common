<template>
  <div class="page-demo">
    <h1>演示页面</h1>
  </div>
</template>

<script>
  export default {
    name: 'DemoHome',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h1 {
    background-color: #42b983;
    margin: 0;
  }
</style>