import React from 'react';

import { StyledLoadMore } from '../styles/StyledLoadMore';

const LoadMore = ({ text, callback }) => (
  <StyledLoadMore type="button" onClick={callback}>
    {text}
  </StyledLoadMore>
);

export default LoadMore;
