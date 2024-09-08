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
}

const useGames = (selectedGameQuery: GameQuery) => useData<Game>('/games', {
    params: {
        genres: selectedGameQuery.genre?.id,
        platforms: selectedGameQuery.platform?.id
    }
}, [selectedGameQuery.genre?.id, selectedGameQuery.platform?.id]);

export default useGames;