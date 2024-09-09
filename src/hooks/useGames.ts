import {GameQuery} from "src/App.tsx";
import {FetchResponse} from "src/hooks/useData.ts";
import {useQuery} from "@tanstack/react-query";
import APIClient from "src/components/services/api-client.ts";

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
    rating_top: number;
    rating: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genre?.id,
                    parent_platforms: gameQuery.platform?.id,
                    ordering: gameQuery.sortOrder,
                    search: gameQuery.searchedText
                }
            }),
        staleTime: 5 * 60 * 1000 // 5 minutes
    });


export default useGames;