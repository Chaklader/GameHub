import {useQuery} from "@tanstack/react-query";
import APIClient from "src/components/services/api-client.ts";

import {Game} from "src/entities/Game.ts";


const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string | undefined) => useQuery({
    queryKey: ['games', slug],
    queryFn: () => {
        if (!slug) throw new Error('No slug provided');
        return apiClient.get(slug);
    },
    onError: (error) => console.error('Error fetching game:', error)
});


export default useGame;