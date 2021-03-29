import React, { useState } from 'react';

import Grid from './elements/Grid';
import HeroImage from './elements/HeroImage';
import LoadMore from './elements/LoadMore';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';
import Spinner from './elements/Spinner';

import { useFetchMovies } from './hooks/useFetchMovies';

import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useFetchMovies();
  const [searchTerm, setSearchTerm] = useState('');

  if (error) return <div>Oops! There's nothing here...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <Spinner />
      <LoadMore />
    </>
  );
};

export default Home;
