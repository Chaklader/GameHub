import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "src/components/GameCard.tsx";
import GameCardSkeleton from "src/components/GameCardSkeleton.tsx";
import useGames from "src/hooks/useGames.ts";
import GameCardContainer from "src/components/GameCardContainer.tsx";
import {GameQuery} from "src/App.tsx";


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    const {data: games, isLoading, error} = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                padding="10px"
                spacing={5}
            >
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {games?.results?.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
    );
};

export default GameGrid;