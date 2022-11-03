import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import FlightsBoard from './components/flightsBoard/FlightsBoard';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <FlightsBoard />
      </Router>
    </Provider>
  );
};

export default App;
