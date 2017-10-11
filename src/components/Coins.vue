<template>
    <div class="row">
        <div v-for="coin in coins"  class="col s4 m3">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title"> {{ coin.name }}</span>
                </div>
                <div class="card-action">
                    <p>View: <router-link :to="{ name: 'Coin', params: { id: coin.name }}">{{ coin.name}}</router-link></p>
                    <p>Name: {{ coin.name }}</p>
                    <p>Symbol: {{ coin.symbol }}</p>
                    <p>Price (USD): {{ coin.price_usd }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import auth from '../controllers/authentication.js'

  export default {
    name: 'Coins',

    data() {
      return {
        coins: {}
      }
    },

    created() {
      this.fetchData()
    },

    watch: {
      '$route': 'fetchData'
    },

    methods: {
      fetchData() {
        auth.getCoins(this)
      }
    }
  }
</script>