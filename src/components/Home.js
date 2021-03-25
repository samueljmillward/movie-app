import React from 'react';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMore from './elements/LoadMore';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';

import { useFetchMovies } from './hooks/useFetchMovies';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useFetchMovies();
  console.log({ state });

  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <LoadMore />
    </>
  );
};

export default Home;
