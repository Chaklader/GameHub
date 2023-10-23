import React from 'react';
import {useParams} from "react-router";
import useGame from "../hooks/useGame";
import {Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttribute from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";

const GameDetailPage = () => {

    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);


    if (isLoading) return <Spinner/>
    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText text={game.description_raw}/>
            <GameAttribute game={game}/>
            <GameTrailer gameId={game.id}/>
        </>
    );
};

export default GameDetailPage;