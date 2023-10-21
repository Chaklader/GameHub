import {GameQuery} from "../App";
import {FetchResponse} from "../services/api-client";
import games from "../data/games";
import {useQuery} from "@tanstack/react-query";
import {Platform} from "./usePlatforms";
import APIClient from "../services/api-client";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number
}

const apiClient = new APIClient<Game>('/games');


// TODO: add Error type
const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () => apiClient.getAll({
            params: {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchText
            }
        }),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        // initialData: {count: games.length, results: games}
    })
;


export default useGames;