import React, { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import { Box, Button, Heading, Paragraph, Select } from 'grommet';
import { Link } from 'react-router-dom';
import { Context } from '../../../../components/IntlWrapper';

const SelectIntl = () => {
  const intl = useIntl();
  const context = useContext(Context);
  const { changeLocale } = context;
  const [value, setValue] = useState('');
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      setValue('');
      changeLocale(lng);
    }
  };

  return (
    <Box gap="large">
      <Box align="center">
        <Paragraph textAlign="center">
          This example uses react-intl's useIntl hook to translate TextInput's
          placeholder, and suggestions props.
        </Paragraph>
        <Select
          options={[
            intl.formatMessage({ id: 'select.option1' }),
            intl.formatMessage({ id: 'select.option2' }),
            intl.formatMessage({ id: 'select.option3' }),
          ]}
          messages={{ multiple: intl.formatMessage({ id: 'select.multiple' }) }}
          multiple
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
      <Box gap="small" align="center">
        <Paragraph textAlign="center">Change from English to German</Paragraph>
        <Button
          onClick={() => changeLanguage('en-US')}
          label={intl.formatMessage({ id: 'select.language1' })}
        />
        <Button
          onClick={() => changeLanguage('de-de')}
          label={intl.formatMessage({ id: 'select.language2' })}
        />
        <Link to={`/react-intl`}>
          <Heading level="4">Back</Heading>
        </Link>
      </Box>
    </Box>
  );
};

export default SelectIntl;
