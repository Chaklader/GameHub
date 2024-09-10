import {useParams} from "react-router-dom";
import useGame from "src/hooks/useGame.ts";
import {Heading, Spinner, Text, Box} from "@chakra-ui/react";

const GameDetailPage = () => {
    const {slug} = useParams();
    console.log('Slug from params:', slug); // Log the slug

    const {data: game, isLoading, error} = useGame(slug);

    if (isLoading) return <Spinner/>;

    if (error) return <Text>Error: {(error as Error).message}</Text>;

    if (!game) return <Text>No game found</Text>;

    return (
        <Box>
            <Heading>{game.name}</Heading>
            <Text>{game.description_raw}</Text>
        </Box>
    );
};

export default GameDetailPage;