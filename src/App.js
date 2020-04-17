import React from 'react';
import { Grommet, grommet } from 'grommet';
import {
  CalendarI18next,
  FormI18next,
  HomeI18next,
  RTLI18next,
  SelectI18next,
  SimpleI18next,
  TextInputI18next,
} from './js/pages/Reacti18next';

import {
  FormIntl,
  HomeIntl,
  RTLIntl,
  SelectIntl,
  SimpleIntl,
  TextInputIntl,
} from './js/pages/INTL';

import Home from './js/pages/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Grommet theme={grommet} full>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/react-i18next">
            <HomeI18next />
          </Route>
          <Route path="/calendar-i18next">
            <CalendarI18next />
          </Route>
          <Route path="/form-i18next">
            <FormI18next />
          </Route>
          <Route path="/rtl-i18next">
            <RTLI18next />
          </Route>
          <Route path="/select-i18next">
            <SelectI18next />
          </Route>
          <Route path="/simple-i18next">
            <SimpleI18next />
          </Route>
          <Route path="/textinput-i18next">
            <TextInputI18next />
          </Route>
          <Route exact path="/react-intl">
            <HomeIntl />
          </Route>
          <Route path="/form-intl">
            <FormIntl />
          </Route>
          <Route path="/rtl-intl">
            <RTLIntl />
          </Route>
          <Route path="/select-intl">
            <SelectIntl />
          </Route>
          <Route path="/simple-intl">
            <SimpleIntl />
          </Route>
          <Route path="/textinput-intl">
            <TextInputIntl />
          </Route>
        </Switch>
      </Router>
    </Grommet>
  );
};

export default App;
