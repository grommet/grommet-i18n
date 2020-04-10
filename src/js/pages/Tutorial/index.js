import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';

const Tutorial = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box align="center">
      <Paragraph>{t('greeting')}</Paragraph>
      <Box gap="small" align="center">
        <Paragraph>Change the greeting from english to hawaiian</Paragraph>
        <Button onClick={() => changeLanguage('en')} label="eng" />
        <Button onClick={() => changeLanguage('haw')} label="haw" />
      </Box>
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
      <Tutorial />
    </Suspense>
  );
};
