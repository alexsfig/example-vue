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
    }

}