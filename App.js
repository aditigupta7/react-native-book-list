import React from 'react';
import Navigation from './src/navigation/routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';

// app.js
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
