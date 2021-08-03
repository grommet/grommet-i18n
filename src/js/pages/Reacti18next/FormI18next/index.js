import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Form, FormField, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { GrommetI18next } from '../../../../components/GrommetI18next';

const FormI18next = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanguage(lng);
      setValue('');
      i18n.changeLanguage(lng);
    }
  };

  return (
    <GrommetI18next>
      <Box align="center">
        <Paragraph textAlign="center">
          This example uses react-i18next to translate Form's required error
          message.
        </Paragraph>
        <Form messages={t('grommet')} validate="blur">
          <FormField
            name="name"
            label="Name"
            required
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
        <Box gap="small" align="center">
          <Paragraph>Change from English to Spanish</Paragraph>
          <Button onClick={() => changeLanguage('eng')} label="English" />
          <Button onClick={() => changeLanguage('spa')} label="Spanish" />
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
      <FormI18next />
    </Suspense>
  );
};
