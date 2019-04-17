<template>
    <div class="home">
        <FooterBar></FooterBar>
        <!-- <ul>
            <li v-for="item in lottery_List">
                <span>{{item.baseLotteryClassId}}</span>
                <span>{{item.baseLotteryId}}</span>
                <span>{{item.lotteryType}}</span>
                <span>{{item.name}}</span>
            </li>
        </ul> -->
        <div class="nav">
            <NvaA v-if="types=='1'"></NvaA>
            <NvaB v-else-if="types=='2'"></NvaB>
        </div>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'
import FooterBar from "../commen/footerBar.vue"
import NvaA from "../components/nav_I.vue"
import NvaB from "../components/nav_II.vue"
export default {
    data(){
        return{
            lottery_List:[]
        }
    },
    components:{
        FooterBar,
        NvaA,
        NvaB,
    },
    created(){
        // this.kindSum().then( res => {
        //     this.lottery_List = res;
        // })
    },
    computed:{
        ...mapState(['types']),
        ...mapState('homeIndex',['lotteryList'])
    },
    methods:{
        ...mapActions('homeIndex',['kindSum']),
        ...mapMutations('homeIndex',['savekindSum']),
        ...mapMutations(['getTypes'])

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
        .nav{
            width: 100%;
            overflow: auto;
            min-height: 500px;
            // background: gold;
        }
    }
</style>


