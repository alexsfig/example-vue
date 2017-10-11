<template>
<div class="row">
<div>
            <router-link to="/Employees">Employees</router-link>
            <router-link to="/employees/create">Add New</router-link>
        </div>
    <form @submit.prevent="submit" class="offset-s3 col s6"> 
        <div class="row">
            <div class="input-field col s12">
               <input type="text" id="first_name" name="first_name" v-model="first_name" v-validate:first_name="'required'" :class="{'input': true, 'invalid': errors.has('first_name') }" />
                <label for="first_name" v-bind:data-error="errors.first('first_name')">
                    <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
                    First Name
                </label>
            </div>
            <div class="input-field col s12">
                <input type="text" id="last_name" name="last_name" class="form-control" v-model="last_name" v-validate:last_name="'required'" :class="{'input': true, 'invalid': errors.has('last_name') }">
                <label for="last_name" v-bind:data-error="errors.first('last_name')">
                    <i v-show="errors.has('last_name')" class="fa fa-warning"></i>
                    Last name
                </label>
            </div>          
            <div class="input-field col s12">
                <input type="text" id="ssn" name="ssn" class="form-control" v-model="ssn" v-validate:ssn="'required'" :class="{'input': true, 'invalid': errors.has('ssn') }">
                <label for="ssn" v-bind:data-error="errors.first('ssn')">
                    <i v-show="errors.has('ssn')" class="fa fa-warning"></i>
                    SSN
                </label>

            </div>
            <div class="input-field col s12">
                <input type="email" id="email" name="email" class="form-control" v-model="email" v-validate:email="'required|email'" :class="{'input': true, 'invalid': errors.has('email') }"> 
                <label for="email" v-bind:data-error="errors.first('email')">
                    <i v-show="errors.has('email')" class="fa fa-warning"></i>
                    Email
                </label>
            </div>
            <div class="input-field col s12">
                <input type="text" id="phone_number" name="phone_number" class="form-control" v-model="phone_number" v-validate:phone_number="'required'" :class="{'input': true, 'invalid': errors.has('phone_number') }">
                <label for="phone_number" v-bind:data-error="errors.first('phone_number')">
                    <i v-show="errors.has('phone_number')" class="fa fa-warning"></i>
                    Phone Number
                </label>
            </div>
            <div class="input-field col s12">
                <input type="text" id="birth_date" name="birth_date"  v-model="birth_date" v-validate:birth_date="'required'" :class="{'datepicker':true, 'input': true, 'invalid': errors.has('birth_date') }">
                <label for="birth_date" v-bind:data-error="errors.first('birth_date')">
                <i v-show="errors.has('birth_date')" class="fa fa-warning"></i>
                    Birth Date
                </label>
            </div>          
            <div class="col s12">
                <input type="checkbox" id="apply_incentives" name="apply_incentives" v-model="apply_incentives" v-validate:apply_incentives="'required'" :class="{'invalid': errors.has('apply_incentives') }">
                <label for="apply_incentives" v-bind:data-error="errors.first('apply_incentives')">
                <i v-show="errors.has('apply_incentives')" class="fa fa-warning"></i>
                    Apply Incentives
                </label>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 text-right">
                <button type="submit" class="btn btn-flat btn-sm btn-primary">ADD NEW</button>
            </div>
        </div>

    </form>
    </div>
</template>

<script>
    import employees from '../../controllers/employees.js'
    export default {
        name: 'Employees',
        data() {
            return {
                errMsg:  '',
                errLogin: false,
                isLogin: false,
                // We need to initialize the component with any
                // properties that will be used in it
                first_name: '',
                last_name: '',
                ssn: '',
                email: '',
                phone_number: '',
                birth_date: '',
                apply_incentives: false,
                profile_picture: '',
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then(success => {
                    if (success) {
                      
                        var object_data = {
                            first_name: this.first_name,
                            last_name: this.last_name,
                            position: this.position,
                            ssn: this.ssn,
                            email: this.email,
                            phone_number: this.phone_number,
                            birth_date: this.birth_date,
                            status: this.status,
                            apply_incentives: this.apply_incentives,
                            profile_picture: 'wfer',
                            status: true,
                            position: 'sdfasgfsd'
                        }
                        employees.create(this, object_data)
                    }
                    else{
                        alert('ERROR');
                    }
                });
            }
        }

    }
</script>
<style scoped>
.active {
  width: 100%;
}
</style>