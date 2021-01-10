import axios from 'axios';

const api = axios.create({
    baseURL: "https://developers.zomato.com/api/v2.1/"
});

api.interceptors.request.use(
    async config => {
  
      config.headers = { 
        'user-key': 'b3a8a7fc589456ec38ae76cc154c64a3'
      }

      return config;
    },
    error => {
      Promise.reject(error)
  });

export default api;