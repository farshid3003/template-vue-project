import axios from 'axios';

export default {
    init (token) {
        axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
        axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
};
