

import axios from 'axios';

const instance = axios.create({
    baseURL: "https://nodejs-tm.herokuapp.com/"
});

instance.interceptors.request.use(
    config => {
        config.headers['Authorization'] = localStorage.getItem("token");
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;