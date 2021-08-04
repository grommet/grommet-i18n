import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { GrommetI18next } from '../../../../components/GrommetI18next';

const SimpleI18next = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <GrommetI18next>
      <Box align="center">
        <Paragraph textAlign="center">
          This example uses react-i18next to translate text within grommet's
          paragraph component.
        </Paragraph>
        <Paragraph>{t('simple.greeting')}</Paragraph>
        <Box gap="small" align="center">
          <Paragraph>Change from English to Hawaiian</Paragraph>
          <Button onClick={() => changeLanguage('en')} label="English" />
          <Button onClick={() => changeLanguage('haw')} label="Hawaiian" />
        </Box>
        <Link to={`/react-i18next`}>
          <Heading level="4">Back</Heading>
        </Link>
      </Box>
    </GrommetI18next>
  );
};

const Loader = () => (
  <Box>
    <Box>loading...</Box>
  </Box>
);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Suspense fallback={<Loader />}>
      <SimpleI18next />
    </Suspense>
  );
};
