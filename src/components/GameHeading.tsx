import { Heading } from '@chakra-ui/react';
import useGenre from 'src/hooks/useGenre.ts';
import usePlatform from 'src/hooks/usePlatform.ts';
import useGameQueryStore from 'src/store.ts';

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = useGenre(genreId);
  const platform = usePlatform(platformId);

  return (
    <Heading as="h1" fontSize="5xl">
      {`${platform?.name || ''} ${genre?.name || ''} Games`}
    </Heading>
  );
};

export default GameHeading;
