import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import store from './store';

const App = () => {
  return (
    // <Provider store={store}>
    <Header />
    // </Provider>
  );
};

export default App;
