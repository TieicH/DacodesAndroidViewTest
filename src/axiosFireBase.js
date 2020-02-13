import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://th-proyect.firebaseio.com/',
  // baseURL: 'https://71043da4.ngrok.io/api',
});

export default instance;
