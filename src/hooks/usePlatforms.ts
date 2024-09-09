import platforms from "src/data/platforms.ts";
import {FetchResponse} from "src/hooks/useData.ts";
import apiClient from "src/components/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useDataQuery<Platform>(
//     ['platforms'],
//     '/platforms/lists/parents',
//     {
//         staleTime: 24 * 60 * 60 * 1000, // 24 hours
//         initialData: {count: platforms.length, results: platforms}
//     }
// );

const usePlatforms = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Platform>>('/platforms/lists/parents')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: platforms.length, results: platforms}
    });


export default usePlatforms;