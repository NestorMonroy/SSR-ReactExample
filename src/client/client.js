//Startup point for the client side application
import 'babel-polyfill';
import React from 'react';
import ReacDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';

import reducers from '../client/reducers';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const axiosInstace = axios.create({
  baseURL:'/api'
})


const store = createStore(
  reducers, 
  window.INITIAL_STATE, 
  applyMiddleware(thunk.withExtraArgument(axiosInstace))
);

ReacDom.hydrate(
  <Provider store={store}>
     <BrowserRouter>
      <div>{renderRoutes(Routes)} </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
