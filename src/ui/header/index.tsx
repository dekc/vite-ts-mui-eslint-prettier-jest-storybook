import { AccountCircle } from '@mui/icons-material';
import { AppBar, Button, IconButton, Menu, MenuItem, Paper, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { useRouter, useTransitionHook } from '@uirouter/react';
import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';

import { useUserStore } from '@/services/storeAdapter';
import DarkModeToggle from '@/ui/components/DarkModeToggle';

const AppTabs = () => {
  const [value, setValue] = useState<string>('home');
  const router = useRouter();
  useTransitionHook('onEnter', {}, (transition) => {
    console.log('transition', transition);
    const to = transition.to();
    if (to.name !== 'login') setValue(to.name || 'home');
  });

  // useEffect(() => {
  //   setValue(state.name || 'home');
  // }, [state]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log('Selected tab: ', newValue);
    router.stateService.go(newValue);
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleTabChange} sx={{ flexGrow: 1 }}>
      <Tab label="Home" value="home" />
      <Tab label="Ports" value="ports" />
      <Tab label="About" value="about" />
    </Tabs>
  );
};

const Header = (): JSX.Element => {
  const { user } = useUserStore();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const loginOnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    router.stateService.go('login');
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // <UISrefActive class={'active'}>
  //   <UISref to={'ports'}>
  //     <a role="button">Port Map</a>
  //   </UISref>
  // </UISrefActive>;

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <DarkModeToggle />
        <Typography variant="h6" component="div" pl="1em" pr="2em">
          Clean Architecture
        </Typography>
        <AppTabs />
        {user ? (
          <>
            <IconButton
              size="large"
              edge="start"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              sx={{ mr: 2 }}
            >
              <AccountCircle />
            </IconButton>
            <Paper sx={{ background: 'white' }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Paper>
          </>
        ) : (
          <Button variant="outlined" color="info" onClick={loginOnClick}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default observer(Header);
