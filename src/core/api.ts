import axios from "axios";


export const $host = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})



