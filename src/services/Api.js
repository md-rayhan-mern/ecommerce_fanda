import axios from "axios";
import toast from "react-hot-toast";

const baseApi = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const api = axios.create({
  baseURL: baseApi,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
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
    console.log(response); // axios all in one response object
    return response?.data; // return all in one axios response step - 1
  }, //success //message //token //user{} or //data{}
  (error) => {
    if (error.response && error.response.statusCode === 401) {
      console.error("Unauthorized! Logging out...");
       localStorage.removeItem("user");
     toast.error("সেশন শেষ! লগআউট করা হচ্ছে...");
      //window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
