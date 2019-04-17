import { request } from "../../joggle/joggle.js"
export default {
    namespaced:true,
    state:{
        lotteryList:[],
        queryLotteryOrderOwnList:[]
    },
    getters:{

    },
    mutations:{
        savekindSum(state,obj){
            state.lotteryList = obj
        },
        savequeryLotteryOrderOwn(state,obj){
            state.queryLotteryOrderOwnList = obj
        }
    },
    actions:{
        kindSum({
            commit
        }){
            return new Promise(function(resolve,reject){
                let res = request('get','kindSum').then((res)=>{
                    commit('savekindSum',res)
                    resolve(res)
                })
            })
        },
        queryLotteryOrderOwn({commit},params){
            return new Promise( function(resolve,reject){
                let res = request( 'post','queryLotteryOrderOwn',params).then( res => {
                    commit('savequeryLotteryOrderOwn',res.data)
                    resolve(res)
                })
            })
        }
    }
}