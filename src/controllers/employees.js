// Import classes to use in methods
// Base class connection
import {HTTP} from '../common_class/http.js';
// Use router 
import {router} from '../router/index.js'
// define base url to Employees
const EMPLOYEE = 'employees/'


export default {
    /*
        Use context to update vars dinamyc
        object Employee: {
            isLogin: false,
            first_name: '',
            last_name: '',
            ssn: '',
            email: '',
            phone_number: '',
            birth_date: '',
            apply_incentives: false,
            profile_picture: '',
        }
    */
    /* 
        Use the context to redirect after succeded and update var to use in view
        
        Method to create employees, pass object Employee
    */
    create(context, employee){
        HTTP.post(EMPLOYEE)
            .then((resp) => {
                if (resp.status>= 200 && resp.status <=300){
                    console.log(resp)
                    var id = resp.data.id
                    // redirect to show employee view 
                    context.$router.push({ name: 'EmployeesShow', params: {  id }}) 
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response);
                }
            })
    },
    /* 
        Method to update employee, pass context, object Employee and employee id
    */
    
    update(context, employee, id){
        this.error = false 
        HTTP.put(EMPLOYEE + id, employee)
            .then((resp) => {
                if (resp.status>= 200 && resp.status <=300){
                    var id = resp.data.id
                    this.error = false 
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.response) {
                    console.log(err.response.data);
                    console.log(err.response);
                    this.error = true 
                }
            })
    },
    /* 
        Method to get employee, pass only the context, id will be taken from url
    */
    show(context){
        HTTP.get(EMPLOYEE + context.$route.params.id+'/')
            .then((resp) => {
                context.employee = resp.data

            })
            .catch((err) => {
              console.log(err)
            })
    },
    /* 
        Method to display all employees, pass only the context
    */
    index(context){
        HTTP.get(EMPLOYEE)
            .then((resp) => {
                context.employees = resp.data
            })
            .catch((err) => {
              console.log(err)
            })
    },
    /* 
        Method to retrieve employee, pass the context and employee id, use this method when you need to edit employee
    */
    
    retrieve(context, id){
        HTTP.get(EMPLOYEE + id)
            .then((resp) => {
                context.id  = resp.data.id ,
                context.first_name = resp.data.first_name,
                context.last_name = resp.data.last_name,
                context.ssn = resp.data.ssn,
                context.email = resp.data.email,
                context.phone_number = resp.data.phone_number,
                context.birth_date = resp.data.birth_date,
                context.apply_incentives = resp.data.apply_incentives,
                context.profile_picture = resp.data.profile_picture,
                context.employee = resp.data
            })
            .catch((err) => {
              console.log(err)
            })
    },
    

}