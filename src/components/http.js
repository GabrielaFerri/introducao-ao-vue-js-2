import axios from 'axios';

const axiosInstance = axios.create({
  baseUrl: '/api',
});

export default axiosInstance;
