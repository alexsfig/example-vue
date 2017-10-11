import Vue from 'vue'
import Router from 'vue-router'
// Import components to use in view
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Login from '@/components/Login'
import Coin from '@/components/Coin'
import Coins from '@/components/Coins'
import EmployeesCreate from '@/components/employees/Create'
import EmployeesShow from '@/components/employees/Show'
import EmployeeIndex from '@/components/employees/Index'
// Import base templates
import AdminTemplate from '@/layouts/Admin'
import LoginTemplate from '@/layouts/Login'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/coins/:id',
      name: 'Coin',
      component: Coin
    },
    {
      path: '/coins',
      name: 'Coins',
      component: Coins
    },
    // Load login views
    {
      path: '/login',
      component: LoginTemplate,
      children:[
        {
          path: '',
          name: 'Login',
          component: Login
        }
      ]
    },
    // Load Admin views
    {
      path: '/admin',
      component: AdminTemplate,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'employees/create',
          name: 'EmployeesCreate',
          component: EmployeesCreate
        },
        {
          path: 'employees',
          name: 'EmployeeIndex',
          component: EmployeeIndex
        },
        {
          path: 'employees/:id',
          name: 'EmployeesShow',
          component: EmployeesShow
        }
      ]
    },
  ]
})

