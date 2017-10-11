<template>
    <div class="row">
        <div>
            <router-link to="/admin/employees">Employees</router-link>
            <router-link to="/admin/employees/create">Add New</router-link>
        </div>
        <div>
            <p>Name: {{ employee.first_name }} {{ employee.last_name }}</p>
            <p>Birth Date: {{ employee.birth_date }}</p>
            <p>Email: {{ employee.email }}</p>
        </div>
    </div>
</template>

<!-- app -->
<div id="app">
  <button id="show-modal" @click="showModal = true">Show Modal</button>
  <!-- use the modal component, pass in the prop -->
  <modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    <h3 slot="header">custom header</h3>
  </modal>
</div>
<script>
    import employees from '../../controllers/employees.js'
    export default {
        name: 'Employee',
        data() {
            return {
                employee:{}
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
                employees.show(this)
            }
        }

    }
</script>
<style scoped>
.active {
  width: 100%;
}
</style>