import axios from 'axios';

export const baseURL =
  // process.env.NEXT_PUBLIC_API_URL ||
  // 'https://pgyuqtbyfn.us-east-1.awsapprunner.com/api/v1';
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8090/api/v1';

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor for error handling
axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    // Handle errors here
    return Promise.reject(error);
  }
);
