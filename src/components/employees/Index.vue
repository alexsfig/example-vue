<template>
    <div class="row">
        <div>
            <router-link to="/admin/employees">Employees</router-link>
            <router-link to="/admin/employees/create">Add New</router-link>
        </div>
        <div class="col m3" v-for="employee in employees">
            <br>
            <div>
                <p>Name: {{ employee.first_name }} {{ employee.last_name }}</p>
                <p>Birth Date: {{ employee.birth_date | formatDate}}</p>
                <p>Email: {{ employee.email }}</p>
                <button class="waves-effect waves-light btn modal-trigger" @click="showModal = true, retrieveData(employee.id)">Edit</button>
                <p>View: <router-link :to="{ name: 'EmployeesShow', params: { id: employee.id }}">view</router-link></p>
            </div>
        </div>
        

        <!-- Modal Structure -->
        <div v-show="showModal" id="modal1" class="modal open modal-fixed-footer"   style="z-index: 1003; display: block; opacity: 1; transform: scaleX(1); top: 10%;">
            <div class="modal-content">
              <h5>Edit employee</h5>
                <form @submit.prevent="update" class="offset-s2 col s8"> 
                    <div class="row">
                        <input value="  " type="hidden" v-model="id">
                        <div class="input-field col s6">
                           <input value="  " type="text" id="first_name" name="first_name" v-model="first_name" v-validate:first_name="'required'" :class="{'input': true, 'invalid': errors.has('first_name') }" />
                            <label for="first_name" v-bind:data-error="errors.first('first_name')">
                                <i v-show="errors.has('first_name')" class="fa fa-warning"></i>
                                First Name
                            </label>
                        </div>
                        <div class="input-field col s6">
                            <input value="  " type="text" id="last_name" name="last_name" class="form-control" v-model="last_name" v-validate:last_name="'required'" :class="{'input': true, 'invalid': errors.has('last_name') }">
                            <label for="last_name" v-bind:data-error="errors.first('last_name')">
                                <i v-show="errors.has('last_name')" class="fa fa-warning"></i>
                                Last name
                            </label>
                        </div>          
                        <div class="input-field col s6">
                            <input value="  " type="text" id="ssn" name="ssn" class="form-control" v-model="ssn" v-validate:ssn="'required'" :class="{'input': true, 'invalid': errors.has('ssn') }">
                            <label for="ssn" v-bind:data-error="errors.first('ssn')">
                                <i v-show="errors.has('ssn')" class="fa fa-warning"></i>
                                SSN
                            </label>

                        </div>
                        <div class="input-field col s6">
                            <input value="a@a.com" type="email" id="email" name="email" class="form-control" v-model="email" v-validate:email="'required|email'" :class="{'input': true, 'invalid': errors.has('email') }"> 
                            <label for="email" v-bind:data-error="errors.first('email')">
                                <i v-show="errors.has('email')" class="fa fa-warning"></i>
                                Email
                            </label>
                        </div>
                        <div class="input-field col s6">
                            <input value="  " type="text" id="phone_number" name="phone_number" class="form-control" v-model="phone_number" v-validate:phone_number="'required'" :class="{'input': true, 'invalid': errors.has('phone_number') }">
                            <label for="phone_number" v-bind:data-error="errors.first('phone_number')">
                                <i v-show="errors.has('phone_number')" class="fa fa-warning"></i>
                                Phone Number
                            </label>
                        </div>
                        <div class="input-field col s6">
                            <input value="  " type="text" id="birth_date" name="birth_date"  v-model="birth_date" v-validate:birth_date="'required'" :class="{'datepicker':true, 'input': true, 'invalid': errors.has('birth_date') }">
                            <label for="birth_date" v-bind:data-error="errors.first('birth_date')">
                            <i v-show="errors.has('birth_date')" class="fa fa-warning"></i>
                                Birth Date
                            </label>
                        </div>          
                        <div class="col s6">
                            <input value="  " type="checkbox" id="apply_incentives" name="apply_incentives" v-model="apply_incentives" :class="{'invalid': errors.has('apply_incentives') }">
                            <label for="apply_incentives" v-bind:data-error="errors.first('apply_incentives')">
                            <i v-show="errors.has('apply_incentives')" class="fa fa-warning"></i>
                                Apply Incentives
                            </label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 text-right">
                            <button type="submit" class="btn btn-flat btn-sm btn-primary">Update employee</button>
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
              <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat ">Agree</a>
            </div>
        </div>
        <div v-show="showModal"  @click="showModal = false, fetchData()" class="modal-overlay" style="z-index: 1002; display: block; opacity: 0.5;"></div>
    </div>


</template>

<script>
    import employees from '../../controllers/employees.js'
    export default {
        name: 'Employee',
        data() {
            return {
                employees:{},
                showModal: false,
                errMsg:  '',
                success: false,
                isLogin: false,
                // We need to initialize the component with any
                // properties that will be used in it
                first_name: ' ',
                last_name: ' ',
                ssn: ' ',
                email: ' ',
                phone_number: ' ',
                birth_date: ' ',
                apply_incentives: false,
                profile_picture: ' ',
                id: 0
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
                var object_data = {
                    headers: {
                        'x-access-token': localStorage.access_token
                    }
                };
                employees.index(this, object_data)
            },
            retrieveData(id) {
                var object_data = {
                    headers: {
                        'x-access-token': localStorage.access_token
                    }
                };
                employees.retrieve(this, object_data, id)
            },
            update() {
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
                        employees.update(this, object_data, this.id)
                    }
                    else{
                        alert('ERROR')
                    }
                })

            }
        }

    }
</script>
<style scoped>
.active {
  width: 100%;
}
</style>