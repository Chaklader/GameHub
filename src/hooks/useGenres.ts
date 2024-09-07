import {useEffect, useState} from "react";
import apiClient from "src/components/services/api-client.ts";
import {CanceledError} from "axios";


interface Genre {
    id: number;
    name: string;
}


interface FetchGenresResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setIsLoading(false);
                setGenres(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setIsLoading(false);
                setError(err.message);
            });

        return () => controller.abort();
    }, []);

    return {genres, error, isLoading}
}

export default useGenres