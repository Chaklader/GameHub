import React from 'react';
import useGenres, {Genre} from "../hooks/useGenres";
import {Button, Heading, HStack, Image, List, ListItem} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({selectedGenreId, onSelectGenre}: Props) => {

    const {data: genres} = useGenres();

    return (
        <>
            <Heading fontSize='2xl' marginBottom={3}>Genre</Heading>
            <List>
                {genres?.results.map(genre => <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}
                               objectFit='cover'/>
                        <Button whiteSpace='normal' textAlign='left'
                                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                                onClick={() => onSelectGenre(genre)} fontSize='lg'
                                variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>)}
            </List>
        </>
    );
};

export default GenreList;