import React from 'react';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMore from './elements/LoadMore';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

import { useFetchMovies } from './hooks/useFetchMovies';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useFetchMovies();
  console.log({ state });

  if (error) return <div>Oops! There's nothing here...</div>;
  if (!state.movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <Spinner />
      <LoadMore />
    </>
  );
};

export default Home;
