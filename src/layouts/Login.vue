
<template>
  <div id="login">
    <img src="../assets/logo.png">
    <br> 
    <router-view/>
  </div>  
</template>

<script>
export default {
  name: 'login'
}
</script>

<style>
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>