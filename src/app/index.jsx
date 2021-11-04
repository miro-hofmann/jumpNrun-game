import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './style';
import { Routes } from './routes';

export const App = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);
