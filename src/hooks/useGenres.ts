import {useQuery} from '@tanstack/react-query';
import APIClient from 'src/components/services/api-client.ts';
import genres from 'src/data/genres.ts';
import {Genre} from "src/entities/Genre.ts";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
    useQuery({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000, // 24h
        initialData: {count: genres.length, results: genres},
    });

export default useGenres;
