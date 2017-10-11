<template>
  <div id="nav">
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
  </div>
</template>

<script>
export default {
  name: 'nav'
}
</script>
