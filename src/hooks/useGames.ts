import {GameQuery} from "../App";
import apiClient, {FetchResponse} from "../services/api-client";
import games from "../data/games";
import {useQuery} from "@tanstack/react-query";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number
}


// TODO: add Error type
const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () => {
        return apiClient.get<FetchResponse<Game>>('/games', {
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }).then(res => res.data)
    },
    staleTime: 24 * 60 * 60 * 1000, // 24h
    // initialData: {count: games.length, results: games}
});


export default useGames;