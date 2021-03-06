import { AppBar, Toolbar } from '@mui/material';
import React, { FC } from 'react';

import DarkModeToggle from '../components/DarkModeToggle';

const Header: FC = () => {
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <DarkModeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
