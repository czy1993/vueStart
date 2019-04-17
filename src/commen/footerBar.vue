<template>
    <div id="footerBar">
      <div class="footerBar_TOP">
        <div class="left">
          ShowAPI,互联网API入口
        </div>
        <div class="right">
          <span>联系客服</span>
          <span>讨论区</span>
          <span>帮助</span>
          <span>你好，<span>普通会员</span>{{username}}</span>
          <span>消息（<span class="tilNum">{{tilNum}}</span>)</span>
        </div>
        
      </div>
      <ul>
        <li v-for="(item,index) in classNameList" @click="changeType(index)">{{item}}</li>
      </ul>
        
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  name: 'footerBar',
  data () {
    return {
      username:'cdx19931114',
      tilNum:'59',
      classNameList:[
        '笑话大全','美女图片','体育新闻','电影排行','奇闻异事','花边新闻'
      ]
    }
  },
  computed:{
    ...mapState(['types'])
  },
  methods:{
    ...mapMutations(['getTypes']),
    changeType(index){
      this.getTypes(index+1)
    }
  }
}
</script>

<style lang="less">
#footerBar{
    height: 120px;
    width: 100%;
    background: #fff;
    color: #666;
    text-align: center;
    
    min-width: 800px;
    .footerBar_TOP{
      background: #fcfcfc;
      color: #666;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #ececec;
      padding: 0 12%;
      .left{
          float: left;
        }
        .right{
          float: right;
          span{
            display: inline-block;
            padding: 0 5px;
          }
          .tilNum{
            color: red;
          }
        }
    }
    ul{
      width: 100%;
      height: 60px;
      font-size: 20px;
      font-weight: 800;
      // line-height: 60px;
      padding: 5px 12%;
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #ececec;
      li{
        height: 50px;
        line-height: 50px;
        color: #65acda;
      }
    }
    
}
</style>

