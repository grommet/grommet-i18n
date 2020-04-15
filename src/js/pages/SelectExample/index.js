import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Paragraph, Select } from 'grommet';
import { Link } from 'react-router-dom';

const SelectExample = () => {
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
    <Box gap="large">
      <Box align="center">
        <Paragraph textAlign="center">
          This example uses react-i18next to translate the select compoenent's
          options, and the string value found in its messages prop.
        </Paragraph>
        <Select
          options={[
            t('selection.option1'),
            t('selection.option2'),
            t('selection.option3'),
          ]}
          messages={{ multiple: t('messages.multiple') }}
          multiple
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
      <Box gap="small" align="center">
        <Paragraph textAlign="center">Change from Enlgish to German</Paragraph>
        <Button
          onClick={() => changeLanguage('en')}
          label={t('language.option1')}
        />
        <Button
          onClick={() => changeLanguage('de')}
          label={t('language.option2')}
        />
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
      <SelectExample />
    </Suspense>
  );
};
