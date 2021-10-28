import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Frame } from './frame';
import { GlobalStyle } from './style';
import { Routes } from './routes';

export const App = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);
