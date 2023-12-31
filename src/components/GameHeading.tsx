import React from 'react';
import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";


const GameHeading = () => {

    const gameQuery = useGameQueryStore(s => s.gameQuery);
    const genre = useGenre(gameQuery?.genreId);
    const platform = usePlatform(gameQuery?.platformId);

    const heading = `${platform?.name ?? ""} ${genre?.name ?? ""} Games`;

    return (
        <Heading as='h1' marginY={5} fontSize='5xl'>
            {heading}
        </Heading>
    );
};

export default GameHeading;