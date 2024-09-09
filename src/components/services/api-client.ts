import axios, {AxiosRequestConfig} from "axios";
import {FetchResponse} from "src/hooks/useData.ts";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7e2bbf72caf4423dac9046ae149979a7'
    }
});

class APIClient<T> {

    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
            .then(res => res.data);
    }
}

export default APIClient;