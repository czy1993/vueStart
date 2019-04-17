<template>
    <div id="footerBar">
        <h1>我是头部</h1>
    </div>
</template>
<script>
export default {
  name: 'footerBar',
  data () {
    return {
    //   msg: ''
    }
  }
}
</script>

<style lang="less">
#footerBar{
    height: 50px;
    width: 100%;
    background: #000;
    color: #ccc;
    line-height: 50px;
    text-align: center;
    h1{
      width: 300px;
      margin: 0 auto;
      background: yellow;
    }
}
</style>

