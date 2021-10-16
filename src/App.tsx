import { Link, Slider, styled } from '@mui/material';
import React from 'react';

import Header from '@/header';

const App: React.FC = () => {
  return (
    <Root>
      <Header />
      <div>
        <h2 id="title">
          OK so, lets try a{' '}
          <Link
            href="https://mui.com/components/slider/#heading-continuous-sliders"
            target="_blank"
            rel="noopener noreferrer"
          >
            Slider...
          </Link>
        </h2>
        <Slider />
      </div>
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
