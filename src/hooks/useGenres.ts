import genres from "src/data/genres.ts";
import useCustomQuery from "src/hooks/useData.ts";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useCustomQuery<Genre>(
    ['genres'],
    '/genres',
    {
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: {count: genres.length, results: genres}
    }
);

export default useGenres;