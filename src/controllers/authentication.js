import {HTTP} from '../common_class/http.js';
import {router} from '../router/index.js'
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
    getCoin(context){
        HTTP.get('https://api.coinmarketcap.com/v1/ticker/' + context.$route.params.id+'/')
            .then((resp) => {
              context.coin = resp.data[0]
              console.log(resp)
            })
            .catch((err) => {
              console.log(err)
            })
    },
    getCoins(context){
        HTTP.get('https://api.coinmarketcap.com/v1/ticker' )
            .then((resp) => {
              context.coins = resp.data
              console.log(resp)
            })
            .catch((err) => {
              console.log(err)
            })
    }

}