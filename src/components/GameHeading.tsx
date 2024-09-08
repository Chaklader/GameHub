import {GameQuery} from "src/App.tsx";
import {Heading} from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading as="h1" fontSize='5xl'>
            {heading}
        </Heading>
    );
};

export default GameHeading;