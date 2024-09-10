import {useQuery} from '@tanstack/react-query';
import APIClient, {FetchResponse} from 'src/components/services/api-client.ts';
import useGameQueryStore from 'src/store.ts';
import {Game} from "src/entities/Game.ts";

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
        apiClient.getAll({
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        }),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export default useGames;
