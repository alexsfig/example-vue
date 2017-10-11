
import axios from 'axios';
const BASE_URL = "https://insense-api.herokuapp.com/api/v1/";

export const HTTP = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    validateStatus: function (status) {
        return status >= 200 && status < 300;
      },
})