import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "src/hooks/useGames.ts";
import GameCard from "src/components/GameCard.tsx";


const GameGrid = () => {

    const {games, error} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={3} spacing={10}>
                {games.map(game => (
                    <GameCard game={game}/>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;