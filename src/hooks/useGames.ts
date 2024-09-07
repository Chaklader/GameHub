import {useEffect, useState} from "react";
import apiClient from "src/components/services/api-client.ts";
import {CanceledError} from "axios";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}


const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {

        const controller = new AbortController();

        setIsLoading(true);
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(res => {
                setIsLoading(false);
                setGames(res.data.results)
            })
            .catch(err => {
                if (err instanceof CanceledError) return;
                setIsLoading(false);
                setError(err.message);
            });

        return () => controller.abort();
    }, []);

    return {games, error, isLoading}
}

export default useGames;