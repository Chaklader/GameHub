import { useQuery } from '@tanstack/react-query';
import APIClient from 'src/components/services/api-client.ts';
import Screenshot from 'src/entities/Screenshot.ts';

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
