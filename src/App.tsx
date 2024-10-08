import {Box, Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import GameGrid from "src/components/GameGrid.tsx";
import NavBar from "src/components/NavBar.tsx";
import GenreList from "src/components/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "src/components/PlatformSelector.tsx";
import SortSelector from "src/components/SortSelector.tsx";
import GameHeading from "src/components/GameHeading.tsx";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchedText: string;
}

const App = () => {

    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px'
            }}
        >
            <GridItem area='nav'><NavBar
                onSearch={(searchedText) => setGameQuery({...gameQuery, searchedText})}/></GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}
                               selectedGenreId={gameQuery.genreId}/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <Box paddingLeft={2}>
                    <GameHeading gameQuery={gameQuery}/>
                    <HStack spacing={5} marginBottom={5} marginTop={5}>
                        <PlatformSelector
                            onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}
                            selectedPlatformId={gameQuery.platformId}/>
                        <SortSelector
                            onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
                            sortOrder={gameQuery.sortOrder}
                        />
                    </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App;