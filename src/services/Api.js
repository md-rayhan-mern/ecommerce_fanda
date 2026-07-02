import axios from "axios"

const baseApi = "http://localhost:5000/"

const api = axios.create({
    baseURL: baseApi,
    timeout: 1000,
     headers: {
        "Content-Type" : "application/json"
     }
})

api.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error);
})

api.interceptors.response.use((response) => response, (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Logging out...');
      window.location.href = '/login';
    }
})