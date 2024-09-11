import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import getCroppedImageURL from 'src/components/services/image-url.ts';
import useGenres from 'src/hooks/useGenres.ts';
import useGameQueryStore from 'src/store.ts';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Button
                whiteSpace={'normal'}
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
