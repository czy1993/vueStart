import { request } from "../../joggle/joggle.js"
export default {
    namespaced:true,
    state:{
        lotteryList:[]
    },
    getters:{

    },
    mutations:{
        savekindSum(state,obj){
            state.lotteryList = obj
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
        }
    }
}