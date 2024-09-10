import {Box, Grid, GridItem, HStack, Show} from '@chakra-ui/react';
import GameGrid from 'src/components/GameGrid.tsx';
import GameHeading from 'src/components/GameHeading.tsx';
import GenreList from 'src/components/GenreList.tsx';
import NavBar from 'src/components/NavBar.tsx';
import PlatformSelector from 'src/components/PlatformSelector.tsx';
import SortSelector from 'src/components/SortSelector.tsx';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchedText: string;
}

const App = () => {
  return (
      <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: '1fr',
            lg: '200px',
          }}
      >
        <GridItem area="nav">
          <NavBar/>
        </GridItem>
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

export default App;
