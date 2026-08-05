import axios from "axios";

const baseApi = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: baseApi,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) =>  {
    //console.log(response); // axios all in one response object
    return response?.data; // return all in one axios response step - 1
  }, //success //message //token //user{} or //data{}
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized! Logging out...");
      //window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
