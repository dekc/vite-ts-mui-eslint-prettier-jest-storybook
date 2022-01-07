import { Link, Slider } from '@mui/material';
import React from 'react';

import { useAuthenticate } from '@/app/auth';

const Home = () => {
  const { user } = useAuthenticate();

  return (
    <div>
      {user && <h6>Hi {user.name} </h6>}
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
  );
};

export { Home };
