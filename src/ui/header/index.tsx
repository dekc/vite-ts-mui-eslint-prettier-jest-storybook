import { AccountCircle } from '@mui/icons-material';
import { AppBar, Button, IconButton, Menu, MenuItem, Paper, Toolbar, Typography } from '@mui/material';
import { useRouter } from '@uirouter/react';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { useUserStore } from '@/services/storeAdapter';
import DarkModeToggle from '@/ui/components/DarkModeToggle';

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

  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <DarkModeToggle />
        <Typography variant="h6" component="div" pl="1em" sx={{ flexGrow: 1 }}>
          Clean Architecture
        </Typography>
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
