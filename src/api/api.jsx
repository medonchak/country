import  * as axios from 'axios'
let url="https://jsonplaceholder.typicode.com/users"

export const getUsers=()=>{
    return axios.get(url,{withCredentials:true})
    .then(response=> {
        return response.data
        })
}