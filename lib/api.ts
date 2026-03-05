import axios from 'axios';

const api = axios.create({
    baseURL: process.env.LARAVEL_API_URL || 'http://localhost:8000/api',
    withCredentials: true, // Send cookies with every request
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default api;
