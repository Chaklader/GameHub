import useData from "src/hooks/useData.ts";
import {Genre} from "src/hooks/useGenres.ts";


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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', {
    params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id
    }
}, [selectedGenre?.id, selectedPlatform?.id]);

export default useGames;