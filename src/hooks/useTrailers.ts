import { useQuery } from '@tanstack/react-query';
import APIClient from 'src/components/services/api-client.ts';
import Trailer from 'src/entities/Trailer.ts';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
