import platforms from "src/data/platforms.ts";
import useCustomQuery from "src/hooks/useData.ts";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useCustomQuery<Platform>(
    ['platforms'],
    '/platforms/lists/parents',
    {
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
        initialData: {count: platforms.length, results: platforms}
    }
);

export default usePlatforms;