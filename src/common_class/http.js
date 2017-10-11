import axios from 'axios';
// Define custom base url to connect to API
const BASE_URL = "https://insense-api.herokuapp.com/api/v1/";
// Create Base connection 
export const HTTP = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // Pass access token in each request
        'x-access-token': localStorage.access_token
    },
    // Add validation to status request, used in promises 
    validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
})