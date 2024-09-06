import {Grid, GridItem} from '@chakra-ui/react'
import NavBar from "./components/NavBar";
import GameGrid from "src/components/GameGrid.tsx";

const App = () => (
    <Grid
        templateColumns="1fr 1fr"
        templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}
    >
        <GridItem area='nav'><NavBar/></GridItem>
        <GridItem area='aside'>Aside</GridItem>
        <GridItem area='main'><GameGrid/></GridItem>
    </Grid>
);

export default App;