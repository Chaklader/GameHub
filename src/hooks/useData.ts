import {useEffect, useState} from "react";
import apiClient from "src/components/services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, axiosRequestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...axiosRequestConfig})
            .then(res => {
                setIsLoading(false);
                setData(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setIsLoading(false);
                setError(err.message);
            });

        return () => controller.abort();
    }, deps ? [...deps] : []);

    return {data, error, isLoading}
}

export default useData