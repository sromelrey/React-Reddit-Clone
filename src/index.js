import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import store, { history } from './store';

import theme from './theme';
import Routes from './routes';

import { ConnectedRouter } from 'connected-react-router';

import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <HelmetProvider>
    <Provider store={store()}>
      <ThemeProvider theme={theme}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </ThemeProvider>
    </Provider>
  </HelmetProvider>,
  document.getElementById('root'),
);
