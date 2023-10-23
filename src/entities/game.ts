import {Platform} from "./platform";
import {Genre} from "./genre";
import {Publisher} from "./Publisher";



export default interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    publishers: Publisher[];
    slug: string;
    genres: Genre[];
    description_raw: string;
}