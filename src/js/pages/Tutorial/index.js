import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Paragraph } from 'grommet';

const Loader = () => (
  <Box>
    <Box>loading...</Box>
  </Box>
);

const Tutorial = () => {
  const { t } = useTranslation();

  return (
    <Box align="center">
      <Paragraph>{t('greeting')}</Paragraph>
    </Box>
  );
};

export default () => {
  return (
    <Suspense fallback={<Loader />}>
      <Tutorial />
    </Suspense>
  );
};
