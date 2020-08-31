import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://splitz-4ea2b.firebaseio.com/'
});

export default instance;