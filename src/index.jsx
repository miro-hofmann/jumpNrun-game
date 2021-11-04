import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';

window.jnr.entities = [];
window.jnr.physicakEntities = [];

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
