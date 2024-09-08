import useGenres, {Genre} from "src/hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageURL from "src/components/services/image-url.ts";


interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {

    const {data: genres, isLoading, error} = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner/>


    /*
    {
        "id": 14,
        "name": "Simulation",
        "slug": "simulation",
        "games_count": 70832,
        "image_background": "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
        "games": [
            {
                "id": 10035,
                "slug": "hitman",
                "name": "Hitman",
                "added": 10531
            },
            {
                "id": 654,
                "slug": "stardew-valley",
                "name": "Stardew Valley",
                "added": 10108
            },
            {
                "id": 9721,
                "slug": "garrys-mod",
                "name": "Garry's Mod",
                "added": 9845
            },
            {
                "id": 9882,
                "slug": "dont-starve-together",
                "name": "Don't Starve Together",
                "added": 9347
            },
            {
                "id": 22509,
                "slug": "minecraft",
                "name": "Minecraft",
                "added": 8381
            },
            {
                "id": 10065,
                "slug": "cities-skylines",
                "name": "Cities: Skylines",
                "added": 8257
            }
        ]
    }
    * */
    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageURL(genre.image_background)}/>
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} fontSize='lg'
                                variant='link' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;