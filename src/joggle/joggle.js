import Vue from 'vue';
import axios from 'axios';
import baseUrl from "../global.js";
Vue.prototype.$http= axios;
var axiosURL = {
    kindSum: "/inter/ticket/kindSum",
}
export function request(type = 'POST',name = '',data = ''){
    return new Promise(function (resolve,reject){
        var result
        type = type.toUpperCase()
        if(type === 'GET'){
            axios.get(baseUrl + axiosURL[name],data)
                .then( res => {
                    result = res.data;
                    resolve(result)
                })
        }else if(type === 'POST'){
            axios.post(baseUrl + axiosURL[name],data)
                .then(res => {
                    result = res.data;
                    resolve(result)
                })
        }
    })
}