import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7e2bbf72caf4423dac9046ae149979a7',
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  };

  get = (id: string | number) => {
    const url = `${this.endpoint}/${id}`;
    console.log('Requesting URL:', url); // Log the URL being requested
    return axiosInstance.get<T>(url).then((res) => res.data);
  };
}

export default APIClient;
