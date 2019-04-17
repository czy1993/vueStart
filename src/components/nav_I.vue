<template>
    <div class="nav_I">
        <Card class="cards" style="width:440px" v-for="item in contentlist">
            <div style="text-align:center" >
                <img class="nav_I_img" :src="item.img">
                <h3>{{item.title}}</h3>
            </div>
        </Card>
    </div>
</template>
<script>
import contentlistA from "../../static/js/nav_I.js"  
import contentlistB from "../../static/js/nav_II.js" 
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return{
            contentlist:contentlistA,
        }
    },
    created(){
        // this.showapi_a();
        // console.log(this.contentlist)
        
    },
    computed:{
        ...mapState(['types'])
    },
    methods:{
        ...mapMutations(['getTypes']),
        formatterDateTime() {
            var date=new Date()
            var month=date.getMonth() + 1
                    var datetime = date.getFullYear()
                            + ""// "年"
                            + (month >= 10 ? month : "0"+ month)
                            + ""// "月"
                            + (date.getDate() < 10 ? "0" + date.getDate() : date
                                    .getDate())
                            + ""
                            + (date.getHours() < 10 ? "0" + date.getHours() : date
                                    .getHours())
                            + ""
                            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                                    .getMinutes())
                            + ""
                            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                                    .getSeconds());
            return datetime;
        },
        showapi_a(){
            console.log('2222')
            this.$http.post('http://route.showapi.com/852-1',{
                "showapi_timestamp": this.formatterDateTime(),
                "showapi_appid": '77171', //这里需要改成自己的appid
                "showapi_sign": '25cdb92f6500456c85b88015e173f404',  //这里需要改成自己的应用的密钥secret
            }).then( res =>{
                console.log(res)
            })
        }
    }
}
</script>
<style lang="less">
.nav_I{
    width: 900px;
    margin: 0 auto;
    overflow: auto;
    .cards{
        float: left;
    }
    .nav_I_img{
        width: 400px;
    }
}
</style>


