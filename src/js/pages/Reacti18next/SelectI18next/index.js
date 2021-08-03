import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Paragraph, Select } from 'grommet';
import { Link } from 'react-router-dom';
import { GrommetI18next } from '../../../../components/GrommetI18next';

const SelectI18next = () => {
  const { t, i18n } = useTranslation();
  const [value, setValue] = useState('');
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      setValue('');
      i18n.changeLanguage(lng);
    }
  };

  return (
    <GrommetI18next>
      <Box gap="large">
        <Box align="center">
          <Paragraph textAlign="center">
            This example uses react-i18next to translate the select compoenent's
            options, and the string value found in its messages prop.
          </Paragraph>
          <Select
            options={[
              t('select.option1'),
              t('select.option2'),
              t('select.option3'),
            ]}
            messages={ t('grommet') }
            multiple
            value={value}
            onChange={({ value: nextValue }) => setValue(nextValue)}
          />
        </Box>
        <Box gap="small" align="center">
          <Paragraph textAlign="center">
            Change from English to German
          </Paragraph>
          <Button
            onClick={() => changeLanguage('en')}
            label={t('select.language1')}
          />
          <Button
            onClick={() => changeLanguage('de')}
            label={t('select.language2')}
          />
          <Link to={`/react-i18next`}>
            <Heading level="4">Back</Heading>
          </Link>
        </Box>
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
      <SelectI18next />
    </Suspense>
  );
};
