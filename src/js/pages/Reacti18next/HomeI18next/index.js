import React from 'react';
import { Box, Heading } from 'grommet';
import CardView from '../../../../components/CardView';
import { Link } from 'react-router-dom';

const cards = [
  'Simple-i18next',
  'Calendar-i18next',
  'Select-i18next',
  'TextInput-i18next',
  'Form-i18next',
  'RTL-i18next',
];

const msg = 'Grommet components translated with react-i18next';

const HomeI18next = () => {
  return (
    <Box align="center">
      <CardView cards={cards} msg={msg} />
      <Link to={`/`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

export default HomeI18next;
