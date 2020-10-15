//Startup point for the client side application
import React from 'react';
import ReacDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Rotes from './Routes'

ReacDom.hydrate(
  <BrowserRouter>
    <Rotes />
  </BrowserRouter>,
  document.querySelector('#root')
);
