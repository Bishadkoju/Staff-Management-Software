import axios from 'axios';

export const baseURL = "https://sms05.herokuapp.com/api/v1";


const axiosInstance = axios.create({
    baseURL : baseURL,  
});

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = 'Token ' + token;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

export default axiosInstance;