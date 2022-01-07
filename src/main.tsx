import { UIRouter } from '@uirouter/react';
import React from 'react';
import ReactDOM from 'react-dom';

import { router } from '@/ui/routes/config/router';
import { ChosenThemeProvider, ThemeProvider } from '@/ui/theme';

import App from './App';
import { StoreProvider } from './mobxStore';
// import { StoreProvider } from './contextStore';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <ChosenThemeProvider>
        <ThemeProvider>
          <UIRouter router={router}>
            <App />
          </UIRouter>
        </ThemeProvider>
      </ChosenThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
