import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/';

import GlobalSyle from './Style/GlobalStyle';
import Routes from './routes';

function App() {

  return (
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalSyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
