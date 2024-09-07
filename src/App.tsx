import {Grid, GridItem, Show} from '@chakra-ui/react'
import GameGrid from "src/components/GameGrid.tsx";
import NavBar from "src/components/NavBar.tsx";
import GenreList from "src/components/GenreList.tsx";

const App = () => (
    <Grid
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
    >
        <GridItem area='nav'><NavBar/></GridItem>
        <Show above='lg'>
            <GridItem area='aside'>
                <GenreList/>
            </GridItem>
        </Show>
        <GridItem area='main'><GameGrid/></GridItem>
    </Grid>
);

export default App;