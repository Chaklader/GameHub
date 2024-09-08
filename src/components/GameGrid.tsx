import {SimpleGrid, Text} from "@chakra-ui/react";
import GameCard from "src/components/GameCard.tsx";
import GameCardSkeleton from "src/components/GameCardSkeleton.tsx";
import useGames, {Platform} from "src/hooks/useGames.ts";
import GameCardContainer from "src/components/GameCardContainer.tsx";
import {Genre} from "src/hooks/useGenres.ts";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedGenre, selectedPlatform}: Props) => {
    const {data: games, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 5}}
                padding="10px"
                spacing={3}
            >
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {games.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;