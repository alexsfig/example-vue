import {HTTP} from '../common_class/http.js';
import {router} from '../router/index.js'
const API_URL = 'https://insense-api.herokuapp.com/api/v1/'
const LOGIN_URL = 'users/login'
const SIGNUP_URL = API_URL + 'users/'

export default {
    getCoin(context){
        HTTP.get('/v1/ticker/' + context.$route.params.id+'/')
            .then((resp) => {
              context.coin = resp.data[0]
              console.log(resp)
            })
            .catch((err) => {
              console.log(err)
            })
    },
    getCoins(context){
        HTTP.get('/v1/ticker/?limit=10' )
            .then((resp) => {
              context.coins = resp.data
              console.log(resp)
            })
            .catch((err) => {
              console.log(err)
            })
    },
    authenticate(context, params){
        HTTP.post(LOGIN_URL, params )
            .then((resp) => {
                console.log(resp);
                localStorage.setItem('access_token', resp.data.token)
                context.$router.push('about')  
            })
            .catch((err) => {
              console.log(err)
            })
    }

}