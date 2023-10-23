import React from 'react';
import useTrailers from "../hooks/useTrailers";
import {Spinner} from "@chakra-ui/react";

interface Props {
    gameId: number
}

const GameTrailer = ({gameId}: Props) => {

    const {data: trailers, error, isLoading} = useTrailers(gameId);

    const first = trailers?.results[0];

    if (isLoading) return <Spinner/>
    if (error) throw error;


    if (!first) return null;

    return first ? (
        <video
            src={first.data[480]}
            poster={first.preview}
            controls
        />
    ) : null;

};

export default GameTrailer;