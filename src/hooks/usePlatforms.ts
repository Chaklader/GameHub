import platforms from "src/data/platforms.ts";
import {useQuery} from "@tanstack/react-query";
import APIClient from "src/components/services/api-client.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}


const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: platforms.length, results: platforms}
    });


export default usePlatforms;