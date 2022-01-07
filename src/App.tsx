import { styled } from '@mui/material';
import { UIView } from '@uirouter/react';
import React from 'react';

import Header from '@/ui/header';

const App = () => {
  return (
    <Root>
      <Header />
      <UIView />
    </Root>
  );
};

const Root = styled('div')`
  padding: 1% 2% 10vh 2%;
  width: 100%;
  min-height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  & a {
    text-decoration: none;
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`;

export default App;
