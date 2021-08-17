import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from '@/store';
import GlobalStyle from '@/styles/GlobalStyle';

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);
