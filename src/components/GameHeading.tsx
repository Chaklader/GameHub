import {GameQuery} from "src/App.tsx";
import {Heading} from "@chakra-ui/react";
import useGenre from "src/hooks/useGenre.ts";
import usePlatform from "src/hooks/usePlatform.ts";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    const genre = useGenre(gameQuery.genreId);
    const platform = usePlatform(gameQuery.platformId);

    return (
        <Heading as="h1" fontSize='5xl'>
            {`${platform?.name || ''} ${genre?.name || ''} Games`}
        </Heading>
    );
};

export default GameHeading;