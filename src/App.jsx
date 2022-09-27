import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Search from './components/search/Search';
import DirectionButtons from './components/direction/DirectionButtons';
import store from './store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Routes> */}
            <Header />
            <Search />
            <DirectionButtons />
          {/* </Routes> */}
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
