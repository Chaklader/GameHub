import apiClient from "src/components/services/api-client.ts";
import {useQuery} from "@tanstack/react-query";
import {FetchResponse} from "src/hooks/useData.ts";
import genres from "src/data/genres.ts";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres');
// const useGenres = () => ({data: genres, isLoading: false, error: false});


const useGenres = () => useQuery({
    queryKey: ['genres'],
    queryFn: () =>
        apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres
});


export default useGenres