import useGenres from 'src/hooks/useGenres.ts';

const useGenre = (genreId?: number) => {
  const {data: genres} = useGenres();
  return genres.results.find((g) => g.id === genreId);
};

export default useGenre;
