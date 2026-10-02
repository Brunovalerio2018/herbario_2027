import axios from 'axios';

export const api = axios.create({
  // Utilize a porta em que a aplicação NestJS está escutando (3335 ou 3000)
  baseURL: 'http://localhost:3335', 
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);