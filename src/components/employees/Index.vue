<template>
    <div class="row">
        <div>
            <router-link to="/employees">Employees</router-link>
            <router-link to="/employees/create">Add New</router-link>
        </div>
        <div class="col m3" v-for="employee in employees">
            <br>
            <div>
                <p>Name: {{ employee.first_name }} {{ employee.last_name }}</p>
                <p>Birth Date: {{ employee.birth_date }}</p>
                <p>Email: {{ employee.email }}</p>
                <p>View: <router-link :to="{ name: 'EmployeesShow', params: { id: employee.id }}">view</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
    import employees from '../../controllers/employees.js'
    export default {
        name: 'Employee',
        data() {
            return {
                employees:{}
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
            }
        }

    }
</script>
<style scoped>
.active {
  width: 100%;
}
</style>