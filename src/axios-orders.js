import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-3f5ae.firebaseio.com/',
});

export default instance;