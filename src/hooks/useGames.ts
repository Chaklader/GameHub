import {GameQuery} from "src/App.tsx";
import useCustomQuery from "src/hooks/useData.ts";

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

const useGames = (gameQuery: GameQuery) =>
    useCustomQuery<Game>(
        ['games', gameQuery], // Include gameQuery in the queryKey for automatic refetching when it changes
        '/games',
        {
            params: {
                genres: gameQuery.genre?.id,
                platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOrder,
                search: gameQuery.searchedText
            },
            staleTime: 5 * 60 * 1000, // 5 minutes, adjust as needed
        }
    );

export default useGames;