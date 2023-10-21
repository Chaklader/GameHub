import React from 'react';
import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import {Genre} from "../hooks/useGenre";
import {GameQuery} from "../App";
import {render} from "react-dom";


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {

    const {data: games, error, isLoading} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    // if (error) return <Text>{error.message}</Text>

    return (

        <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={6}>
            {isLoading && skeletons.map((skeleton) => (
                <GameCardContainer key={skeleton}>
                    <GameCardSkeleton/>
                </GameCardContainer>
            ))}
            {games?.results.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;