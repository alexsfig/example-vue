<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
          <a href="#" class="brand-logo right">Logo</a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li><router-link to="/login">Login</router-link></li>
              <li><router-link to="/coins/bitcoin">BitCoin</router-link></li>
              <li><router-link to="/coins">Coins</router-link></li>
          </ul>
      </div>
    </nav>
    <div class="container">
      <router-view/>
      
    </div>
  </div>  
</template>

<script>
export default {
  name: 'app'
}
</script>