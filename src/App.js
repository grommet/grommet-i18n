import React from 'react';
import { Grommet, grommet } from 'grommet';
import { CalendarExample, Home, SelectExample, Tutorial } from './js/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Grommet theme={grommet}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calendar">
            <CalendarExample />
          </Route>
          <Route path="/select">
            <SelectExample />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
