import genres from "src/data/genres.ts";
import {FetchResponse} from "src/hooks/useData.ts";
import {useQuery} from "@tanstack/react-query";
import apiClient from "src/components/services/api-client.ts";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useDataQuery<Genre>(
//     ['genres'],
//     '/genres',
//     {
//         staleTime: 24 * 60 * 60 * 1000, // 24 hours
//         initialData: {count: genres.length, results: genres}
//     }
// );

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: () =>
            apiClient
                .get<FetchResponse<Genre>>('/genres')
                .then((res) => res.data),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: genres.length, results: genres}
    });

export default useGenres;