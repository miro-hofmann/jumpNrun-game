import React from 'react';
import { Route, Switch } from 'react-router';
import { Frame } from './frame';
import { JumpSketch } from './scenes/jump';

export const Routes = () => (
  <Switch>
    <Route path="/scenes/1">
      <JumpSketch />
    </Route>
    <Route path="/" exact>
      <h1>Please choose a test chamber:</h1>
      <Frame />
    </Route>
  </Switch>
);
