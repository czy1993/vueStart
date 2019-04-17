import Vue from 'vue';
import Vuex from 'vuex';
import home_index from "./home/homeIndex.js"
Vue.use(Vuex);
const state={   //初始化一个colects数组（全局对象）
    isFooter:true,
    changebelNum:0,
    types:1
}
const getters ={  // 实时监听state值得变化（最新状态）
    isShow(state){
        return state.showFooter
    },
    getChangedNum(){
        return state.changebelNum
    }

}
const mutations ={  
    show(state,data){  //自定义改变state初始值得方法，这里面除state外可以传额外得值
        state.showFooter = data;
    },
    newNum(state,sum){
        state.changebelNum += sum;
    },
    getTypes(state,obj){
        state.types = obj;
        console.log(obj)
    }
}
const actions={
    hideFooter(context){  // 自定义出发mutations里面函数得方法 context与store实列具有相同得方法和属性
        context.commit('show');
    },
    getNewNum(context){
        context.commit('newNum',num)
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules:{
        homeIndex:home_index
    }

});
 
// export default store;