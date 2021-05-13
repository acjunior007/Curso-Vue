import Vue from 'vue'
import axios from 'axios'

// Forma global
// axios.defaults.baseURL = "https://curso-vue-385d3-default-rtdb.firebaseio.com/"
// axios.defaults.headers.common['Authorization'] = 'acvcv121323'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue) {
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vue-385d3-default-rtdb.firebaseio.com/',
            headers: {
                // authorization apenas para os metodos GET
                // get: {
                //     'Authorization': 'acbdfdfd'
                // }
                
                // authorization para todas as requisicoes
                'Authorization': 'acbdfdfd'
            }
        })

        // Vue.prototype.$http_api_vindi = axios.create({
        //     baseURL: 'https://supercv-api-dev.azurewebsites.net/api/'
        // })        
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data){
            //     array.push({ id: chave, ...res.data[chave] })
            // }
            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})