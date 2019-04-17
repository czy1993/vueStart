<template>
    <div class="home">
        <h1>我是home主页</h1>
        <ul>
            <li v-for="item in lottery_List">
                <span>{{item.baseLotteryClassId}}</span>
                <span>{{item.baseLotteryId}}</span>
                <span>{{item.lotteryType}}</span>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
export default {
    data(){
        return{
            lottery_List:[]
        }
    },
    created(){
        this.kindSum().then( res => {
            // console.log(res);
            this.lottery_List = res;
        })
    },
    computed:{
        ...mapState('homeIndex',['lotteryList'])
    },
    methods:{
        ...mapActions('homeIndex',['kindSum']),
        ...mapMutations('homeIndex',['savekindSum']),

    }
}
</script>
<style lang="less">
    .home{
        h1{
            height: 50px;
            line-height: 50px;
            background: #c1c1c1;
            color: #fff;
        }
        ul{
            width: 500px;
            margin: 0 auto;
            li{
                display: flex;
                justify-content: space-around;
                width: 500px;
                box-sizing: border-box;
                padding: 0 10px;
            }
        }
    }
</style>


