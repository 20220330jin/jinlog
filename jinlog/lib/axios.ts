// lib/axios.js

import axios from 'axios';

// Create a custom instance of axios with some default settings
const instance = axios.create({
    // Set the base URL for all requests
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000/api',
    // Set a timeout for requests (in milliseconds)
    timeout: 10000, // 10 seconds
    // Set default headers
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
// This runs before every request
instance.interceptors.request.use(
    (config) => {
        // You can modify the request config here
        // For example, add authentication tokens
        // config.headers['Authorization'] = `Bearer ${yourAuthToken}`;
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

// Response Interceptor
// This runs after every response
instance.interceptors.response.use(
    (response) => {
        // You can modify or log the response here
        return response;
    },
    (error) => {
        // Handle response errors here
        // For example, you could redirect to a login page on 401 errors
        // if (error.response && error.response.status === 401) {
        //   // Redirect to login page
        // }
        return Promise.reject(error);
    }
);

export default instance;