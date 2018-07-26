import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-bb-16cf6.firebaseio.com/'
});

export default instance;