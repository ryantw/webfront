import axios from "axios";
import NProgress from "nprogress";
import router from "../router.js";

const base = axios.create({
  baseURL: `http://localhost:8080`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 5000
});

base.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      //console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    NProgress.start();
    return config;
  },
  error => {
    NProgress.done();
    console.log(error)
    return Promise.reject(error)
  }
);

base.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  error => {
    if(error.response.status && error.response.status === 401){
      router.push("/login");
    } else {
      router.push("/network-issue");
    }
    NProgress.done();
    return Promise.reject(error);
  }
);

export default base;
