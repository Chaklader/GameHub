import {Grid, GridItem, Show} from '@chakra-ui/react'
import GameGrid from "src/components/GameGrid.tsx";
import NavBar from "src/components/NavBar.tsx";
import GenreList from "src/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "src/hooks/useGenres.ts";

const App = () => {

    // @ts-ignore
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
            <GridItem area='main'><GameGrid selectedGenre={selectedGenre}/></GridItem>
        </Grid>
    )
}

export default App;