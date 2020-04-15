import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, TextInput, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';

const RTL = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState('');
  const [rtl, setRtl] = useState('');
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      setValue('');
      i18n.changeLanguage(lng);
    }
  };

  return (
    <Box>
      <Box
        margin="small"
        dir={t('rtl')}
        direction="row"
        align="center"
        pad="small"
        gap="small"
        border
      >
        <Box direction="row" align="center" pad="small">
          {t('greetings.option2')}
        </Box>
      </Box>
      <Box gap="small" align="center">
        <Paragraph>Change from English to Hebrew</Paragraph>
        <Button onClick={() => changeLanguage('eng')} label="English" />
        <Button onClick={() => changeLanguage('heb')} label="Hebrew" />
        <Link to={`/`}>
          <Heading level="4">Back</Heading>
        </Link>
      </Box>
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
      <RTL />
    </Suspense>
  );
};
