import React, { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import { Box, Button, Heading, TextInput, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { Context } from '../../../../components/IntlWrapper';

const TextInputIntl = () => {
  const intl = useIntl();
  const [value, setValue] = useState('');
  const [language, setLanuage] = useState('en');
  const context = useContext(Context);
  const { changeLocale } = context;

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      setValue('');
      changeLocale(lng);
    }
  };

  return (
    <Box align="center">
      <Paragraph textAlign="center">
        This example uses react-intl's useIntl hook to translate TextInput's
        placeholder, and suggestions props.
      </Paragraph>
      <Box>
        <TextInput
          placeholder={intl.formatMessage({ id: 'textinput.greeting1' })}
          suggestions={[
            intl.formatMessage({ id: 'textinput.greeting2' }),
            intl.formatMessage({ id: 'textinput.greeting3' }),
            intl.formatMessage({ id: 'textinput.greeting4' }),
          ]}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onSelect={(e) => setValue(e.suggestion)}
        />
      </Box>
      <Box gap="small" align="center">
        <Paragraph>Change from English to Hawaiian</Paragraph>
        <Button
          onClick={() => changeLanguage('en-US')}
          label="English"
          value="en-US"
        />
        <Button
          onClick={() => changeLanguage('haw')}
          label="Hawaiian"
          value="haw"
        />
      </Box>
      <Link to={`/react-intl`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

export default TextInputIntl;
