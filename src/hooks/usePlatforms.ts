import platforms from "src/data/platforms.ts";

// import useData from "src/hooks/useData.ts";

// interface Platform {
//     id: number;
//     name: string;
//     slug: string;
// }

// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');


const usePlatforms = () => ({data: platforms, isLoading: false, error: false});

export default usePlatforms;