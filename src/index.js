import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducers'
import middleware from './middleware'
import AppRouter from './routers/AppRouter';
import './stylesheets/index.css';
import './stylesheets/App.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister();
