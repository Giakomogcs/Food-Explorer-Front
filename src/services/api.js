import axios from "axios";

export const api = axios.create({
  baseURL:"https://foodexplorer-api-cjyi.onrender.com"
  //baseURL:"http://localhost:3333"
})