import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './stylesheets/App.css';

const store = configureStore();

const state = store.getState();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
