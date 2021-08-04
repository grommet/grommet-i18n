import React from 'react';
import { Box, Heading } from 'grommet';
import CardView from '../../../../components/CardView';
import { GrommetIntl } from '../../../../components/GrommetIntl';
import { Link } from 'react-router-dom';

const cards = [
  'Simple-Intl',
  'Select-Intl',
  'TextInput-Intl',
  'Form-Intl',
  'RTL-Intl',
];

const msg = 'Grommet components translated with react-intl';

const HomeIntl = () => {
  return (
    <GrommetIntl>
      <Box align="center">
        <CardView cards={cards} msg={msg} />
        <Link to={`/`}>
          <Heading level="4">Back</Heading>
        </Link>
      </Box>
    </GrommetIntl>
  );
};

export default HomeIntl;
