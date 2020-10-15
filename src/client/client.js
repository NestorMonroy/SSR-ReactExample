//Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReacDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Rotes from './Routes';
import reducers from '../client/reducers';


const store = createStore(reducers, {}, applyMiddleware(thunk));

ReacDom.hydrate(
  <Provider store={store}>
     <BrowserRouter>
      <Rotes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
