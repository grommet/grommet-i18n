import React from 'react';
import { Grommet, grommet } from 'grommet';
import {
  CalendarExample,
  FormExample,
  Home,
  RTL,
  SelectExample,
  Simple,
  TextInputExample,
} from './js/pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Grommet theme={grommet} full>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/calendar">
            <CalendarExample />
          </Route>
          <Route path="/form">
            <FormExample />
          </Route>
          <Route path="/rtl">
            <RTL />
          </Route>
          <Route path="/select">
            <SelectExample />
          </Route>
          <Route path="/simple">
            <Simple />
          </Route>
          <Route path="/textinput">
            <TextInputExample />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
