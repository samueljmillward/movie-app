import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import StyledHeader from '../styles/StyledHeader';

const Header = () => (
  <>
    <div className="header-content">
      <img src={RMDBLogo} alt="rmdb-logo" />
      <img src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </>
);
export default Header;
