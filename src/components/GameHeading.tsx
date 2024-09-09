import {GameQuery} from "src/App.tsx";
import {Heading} from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

    const heading = `${gameQuery.platformId?.name || ''} ${gameQuery.genreId?.name || ''} Games`

    return (
        <Heading as="h1" fontSize='5xl'>
            {heading}
        </Heading>
    );
};

export default GameHeading;