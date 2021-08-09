import axios from 'axios';

const API = axios.create({
  baseURL: 'http://api.signear.com:8086/',
  timeout: 60000,
  withCredentials: true,
  headers: {
    accept: 'application/json',
  },
});

export default API;

export const fetcher = <T>(url: string): Promise<T> =>
  API.get<T>(url).then(({ data }) => data);
