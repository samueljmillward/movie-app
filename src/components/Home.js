import React from 'react';

import Grid from './elements/Grid';
import Header from './elements/Header';
import HeroImage from './elements/HeroImage';
import LoadMore from './elements/LoadMore';
import MovieThumb from './elements/MovieThumb';
import SearchBar from './elements/SearchBar';

const Home = () => (
  <>
    <HeroImage />
    <SearchBar />
    <Grid />
    <MovieThumb />
    <LoadMore />
  </>
);

export default Home;
