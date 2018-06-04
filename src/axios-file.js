import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-project-1-cddb1.firebaseio.com/'
})

export default instance;
