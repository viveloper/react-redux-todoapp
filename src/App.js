import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Todo from './pages/Todo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
