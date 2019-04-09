import axios from "axios";
import NProgress from "nprogress";

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
    return Promise.reject(error)
  }
);

base.interceptors.response.use(
  //config => config,
  response => {
    NProgress.done();
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error)
  }
);

export default base;
