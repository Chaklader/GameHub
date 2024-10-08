import useGenres, {Genre} from "src/hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageURL from "src/components/services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {
    const {data: genres, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List>
                {genres?.results.map(genre => (
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image objectFit='cover' boxSize='32px' borderRadius={8}
                                   src={getCroppedImageURL(genre.image_background)}/>
                            <Button whiteSpace={'normal'}
                                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'} fontSize='lg'
                                    variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;