import useData from "src/hooks/useData.ts";
import {GameQuery} from "src/App.tsx";


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

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', {
    params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchedText
    }
}, [gameQuery]);

export default useGames;