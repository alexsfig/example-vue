import {HTTP} from '../common_class/http.js';
import {router} from '../router/index.js'
const EMPLOYEE = 'employees/'


export default {
    create(context, employee){
        HTTP.post(EMPLOYEE, employee, {
                    headers: {
                        'x-access-token': localStorage.access_token
                    }
                })
            .then((resp) => {
                if (resp.status>= 200 && resp.status <=300){
                    console.log(resp)
                    var id = resp.data.id
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
    update(context, employee, id){
        this.error = false 
        HTTP.put(EMPLOYEE + id, employee, {
                    headers: {
                        'x-access-token': localStorage.access_token
                    }
                })
            .then((resp) => {
                if (resp.status>= 200 && resp.status <=300){
                    console.log(resp)
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
    show(context, object_data){
        HTTP.get(EMPLOYEE + context.$route.params.id+'/', object_data)
            .then((resp) => {
                context.employee = resp.data
                console.log('12134')
                console.log(resp.data);
            })
            .catch((err) => {
              console.log(err)
            })
    },
    index(context, object_data){
        HTTP.get(EMPLOYEE, object_data)
            .then((resp) => {
                context.employees = resp.data
                console.log('12134')
                console.log(resp.data);
            })
            .catch((err) => {
              console.log(err)
            })
    },
    retrieve(context, object_data, id){
        HTTP.get(EMPLOYEE + id, object_data)
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
                console.log('12134')
                console.log(resp.data);
            })
            .catch((err) => {
              console.log(err)
            })
    },
    

}