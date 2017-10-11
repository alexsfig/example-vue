
import axios from 'axios';
const BASE_URL = "https://api.coinmarketcap.com/v1/ticker/";

export const HTTP = axios.create({
  baseURL: BASE_URL
})