import React from 'react';
import { Frame } from './frame';
import { GlobalStyle } from './style';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Routes } from './routes';

export const App = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);
