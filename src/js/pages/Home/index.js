import { Grommet, grommet } from 'grommet';
import React from 'react';
import CardView from '../../../components/CardView';

const cards = ['React-i18next', 'React-intl'];

const Home = () => {
  return (
    <Grommet theme={grommet} full>
      <CardView cards={cards} />;
    </Grommet>
  );
};

export default Home;
