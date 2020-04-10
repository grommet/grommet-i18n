import React, { Suspense } from 'react';
import { Box, Calendar, Heading } from 'grommet';
import { Link } from 'react-router-dom';

const CalendarExample = () => {
  return (
    <Box align="center">
      <Calendar
        size="small"
        date={new Date().toISOString()}
        daysOfWeek
        onSelect={date => {}}
        locale="hi"
      />
      <Link to={`/`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

const Loader = () => (
  <Box>
    <Box>loading...</Box>
  </Box>
);

export default () => {
  return (
    <Suspense fallback={<Loader />}>
      <CalendarExample />
    </Suspense>
  );
};
