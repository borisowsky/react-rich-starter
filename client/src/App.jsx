import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <div>Hello world!</div>} />
    </Switch>
  </BrowserRouter>
);

export default hot(module)(App);
