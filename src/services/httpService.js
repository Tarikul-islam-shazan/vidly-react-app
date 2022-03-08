import axios from "axios";

axios.interceptors.response.use(null,error => {

});

// eslint-disable-next-line import/no-anonymous-default-export
export  default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}