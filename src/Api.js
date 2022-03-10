import axios from 'axios'

var getApi = axios.create({
  baseURL: 'http://localhost:8000/',
  timeoutn: 1000,

})


   


export default getApi