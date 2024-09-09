import platforms from "src/data/platforms.ts";
import useDataQuery from "src/hooks/useData.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useDataQuery<Platform>(
    ['platforms'],
    '/platforms/lists/parents',
    {
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: {count: platforms.length, results: platforms}
    }
);

export default usePlatforms;