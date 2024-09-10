import {Platform} from "src/entities/platform.ts";

export interface Game {
    id: string;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
}