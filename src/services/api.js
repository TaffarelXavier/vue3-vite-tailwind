import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL

const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  config => {
    let data = localStorage.getItem('data');
    // if (data) {
    //   data = JSON.parse(data);
    //   let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTY4MjYwMjAzMH0.Aicgaq3qx_xMqXDkDxVVHLj-sHk2TzBmV1A7HzMYF94';

    //   config.headers['Authorization'] = `Bearer ${data.token.token}`;
    // }
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImlhdCI6MTY4MjYwMjAzMH0.Aicgaq3qx_xMqXDkDxVVHLj-sHk2TzBmV1A7HzMYF94';
    config.headers['Authorization'] = `Bearer ${token}`; // antes
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
