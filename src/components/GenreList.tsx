import useGenres from "src/hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageURL from "src/components/services/image-url.ts";

const GenreList = () => {

    const {data: genres} = useGenres();

    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)}/>
                        <Text fontSize='lg'>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;