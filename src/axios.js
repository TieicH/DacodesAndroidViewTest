import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
  // baseURL: 'https://71043da4.ngrok.io/api',
});

export default instance;
