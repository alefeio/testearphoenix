import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.71.167.161',
  // baseURL: 'http://134.122.15.198:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
