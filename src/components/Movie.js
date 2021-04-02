import React from 'react';

import Actor from './elements/Actor';
import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Spinner from './elements/Spinner';

import useFetchInfo from './hooks/useFetchInfo';

const Movie = ({ movieId }) => {
  const [movie, loading, error] = useFetchInfo(movieId);

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <Spinner />;
  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid />
    </>
  );
};

export default Movie;
