import React, { Suspense } from 'react';
import { Box, Calendar, Heading, Paragraph, Text } from 'grommet';
import { Link } from 'react-router-dom';

const CalendarI18next = () => {
  return (
    <Box align="center" gap="large">
      <Paragraph textAlign="center">
        This example does not use react-i18next, but grommet calendar's locale
        prop to translate the month and days of the week.
      </Paragraph>
      <Box align="center" direction="row" gap="medium">
        <Box>
          <Calendar
            size="small"
            date={new Date().toISOString()}
            daysOfWeek
            onSelect={(date) => {}}
            locale="pt-br"
          />
          <Text alignSelf="center">locale = pt-br</Text>
        </Box>
        <Box>
          <Calendar
            size="small"
            date={new Date().toISOString()}
            daysOfWeek
            onSelect={(date) => {}}
            locale="hi"
          />
          <Text alignSelf="center">locale = hi</Text>
        </Box>
        <Box>
          <Calendar
            size="small"
            date={new Date().toISOString()}
            daysOfWeek
            onSelect={(date) => {}}
            locale="en-us"
          />
          <Text alignSelf="center">locale = en-us</Text>
        </Box>
        <Box>
          <Calendar
            size="small"
            date={new Date().toISOString()}
            daysOfWeek
            onSelect={(date) => {}}
            locale="heb"
          />
          <Text alignSelf="center">locale = heb</Text>
        </Box>
      </Box>
      <Link to={`/react-i18next`}>
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
      <CalendarI18next />
    </Suspense>
  );
};
