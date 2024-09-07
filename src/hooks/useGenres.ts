import useData from "src/hooks/useData.ts";


export interface Genre {
    id: number;
    name: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres