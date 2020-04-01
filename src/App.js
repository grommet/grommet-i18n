import React from 'react';
import { Grommet, grommet } from 'grommet';
import { Tutorial, SelectExample } from './js/pages';

const App = () => {
  return (
    <Grommet theme={grommet}>
      <Tutorial />
      <SelectExample />
    </Grommet>
  );
};

export default App;
