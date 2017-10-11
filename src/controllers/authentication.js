// Import classes to use in methods
// Base class connection
import {HTTP} from '../common_class/http.js';
// Use router 
import {router} from '../router/index.js'
// Define URL to authenticate
const LOGIN_URL = 'users/login'

export default {
  /*
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
    */
    // Create method to authenticate Users
    /*
      Use the context to redirect after succeded login
      params: {email: 'jdoe@foo.com', password: '123456'}
    */
    authenticate(context, params){
        HTTP.post(LOGIN_URL, params )
            .then((resp) => {
                // Use localStorage to save access token, to use in each request
                localStorage.setItem('access_token', resp.data.token)
                context.$router.push('admin')  
            })
            .catch((err) => {
              console.log(err)
            })
    }

}