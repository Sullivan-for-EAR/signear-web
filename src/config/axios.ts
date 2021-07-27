import axios from 'axios';

const API = axios.create({
  baseURL: '',
  timeout: 60000,
  withCredentials: true,
  headers: {
    Accept: '',
  },
});

export default API;

export const fetcher = <T>(url: string): Promise<T> =>
  API.get<T>(url).then(({ data }) => data);
