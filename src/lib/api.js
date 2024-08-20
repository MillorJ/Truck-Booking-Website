import axios from "axios";

let BaseApi = axios.create({
    'baseURL': "http://localhost:3000/"
})

const Api = () => {
    let token = localStorage.getItem('token')
    if (token) {
        BaseApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        BaseApi.defaults.headers.common["Accept"] = "application/json";
    }
    return BaseApi;
}

export default Api;