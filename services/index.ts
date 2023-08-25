import axios from 'axios';
import { signOut } from 'next-auth/react';

const AXIOS = axios.create({
  baseURL: `${process.env.API_PATH}`,
  headers: {
    'Content-type': 'application/json',
  },
});

AXIOS.interceptors.response.use(
  (response) => response,
  (error) => {
    // whatever you want to do with the error
    if (error.response.status === 401) {
      signOut({ callbackUrl: '/auth/login' });
    }

    throw error;
  }
);

export default AXIOS;
