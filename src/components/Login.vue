<template>
    <div class="row">
        <form @submit.prevent="validateBeforeSubmit" class="offset-s3 col s6"> 
            <div class="row">
                <div class="input-field col s12">
                    <input id="email" name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'invalid': errors.has('email') }" type="text" placeholder="Email">
                    <label for="email" v-bind:data-error="errors.first('email')">
                        <i v-show="errors.has('email')" class="fa fa-warning"></i>
                        Email
                    </label>
                 </div>
                <div class="input-field col s12">
                    <input name="password" v-model="password" v-validate="'required|min:6'" :class="{'input': true, 'invalid': errors.has('password') }" type="password" placeholder="Pasword">
                     <label for="password" v-bind:data-error="errors.first('password')">
                        <i v-show="errors.has('password')" class="fa fa-warning"></i>
                        Password
                    </label>
                </div>
                <div class="input-field col s12">
                    <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                        <i class="material-icons right">send</i>
                    </button>
                </div>  
            </div>
        </form>
    </div>
</template>

<script>
import auth from '../controllers/authentication.js'
export default {
  name: 'form-example',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
            var credentials = {
                email:      this.email,
                password:   this.password
            }
          auth.authenticate(this, credentials )
          
        }
        else{
            alert('Correct them errors!');
            
        }

      });
    }
  }
};
</script>
<style scoped>
.active {
  width: 100%;
}
</style>