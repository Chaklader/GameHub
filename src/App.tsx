import {Grid, GridItem, Show} from '@chakra-ui/react'
import GameGrid from "src/components/GameGrid.tsx";
import NavBar from "src/components/NavBar.tsx";
import GenreList from "src/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "src/hooks/useGenres.ts";
import PlatformSelector from "src/components/PlatformSelector.tsx";
import {Platform} from "src/hooks/useGames.ts";

const App = () => {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

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
                    <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} selectedGenre={selectedGenre}/>
                </GridItem>
            </Show>
            <GridItem area='main'>
                <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)}
                                  selectedPlatform={selectedPlatform}/>
                <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform}/>
            </GridItem>
        </Grid>
    )
}

export default App;