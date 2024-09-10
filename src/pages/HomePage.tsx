import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreList from "src/components/GenreList.tsx";
import GameHeading from "src/components/GameHeading.tsx";
import PlatformSelector from "src/components/PlatformSelector.tsx";
import SortSelector from "src/components/SortSelector.tsx";
import GameGrid from "src/components/GameGrid.tsx";


const HomePage = () => {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '250px',
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={2}>
                    <GameHeading/>
                    <HStack spacing={5} marginBottom={5} marginTop={5}>
                        <PlatformSelector/>
                        <SortSelector/>
                    </HStack>
                </Box>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
};

export default HomePage;