import type {} from '@mui/lab/themeAugmentation';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import React, { FC, useContext, useMemo } from 'react';

import { ChosenTheme } from './ChosenTheme';

export const ThemeProvider: FC = ({ children }) => {
  const { theme } = useContext(ChosenTheme);
  const muiTheme = useMemo(() => createThemeHelper(theme), [theme]);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

const brandColor = '#73b3bd';
const createThemeHelper = (theme: 'dark' | 'light') => {
  const isDark = theme === 'dark';
  return createTheme({
    palette: {
      mode: theme,
      background: {
        default: isDark ? '#303030;' : '#f0f0f0',
        paper: isDark ? '#242526' : '#fffff',
      },
      primary: {
        main: '#547575',
      },
      error: {
        main: 'rgb(232, 51, 51)',
      },
      success: {
        main: 'rgb(76,175,80)',
      },
      info: {
        main: 'rgb(212, 230, 233)',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: isDark ? '#303030;' : brandColor,
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: isDark ? brandColor : '#f0f0f0',
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            '&.Mui-selected': {
              color: isDark ? brandColor : '#f0f0f0',
            },
          },
        },
      },
    },
  });
};
