import {Grid, GridItem, HStack, Show} from '@chakra-ui/react'
import GameGrid from "src/components/GameGrid.tsx";
import NavBar from "src/components/NavBar.tsx";
import GenreList from "src/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "src/hooks/useGenres.ts";
import PlatformSelector from "src/components/PlatformSelector.tsx";
import {Platform} from "src/hooks/useGames.ts";
import SortSelector from "src/components/SortSelector.tsx";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
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
            <GridItem area='nav'><NavBar/></GridItem>
            <Show above='lg'>
                <GridItem area='aside' paddingX={5}>
                    <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
                               selectedGenre={gameQuery.genre}/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <HStack spacing={5} paddingLeft={2} marginBottom={5}>
                    <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}
                                      selectedPlatform={gameQuery.platform}/>
                    <SortSelector
                        onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}
                        sortOrder={gameQuery.sortOrder}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>
    )
}

export default App;