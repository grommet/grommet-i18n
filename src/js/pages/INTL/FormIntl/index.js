import React, { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import { Box, Button, Form, FormField, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { Context } from '../../../../components/IntlWrapper';

const FormIntl = () => {
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
    <Box align="center">
      <Paragraph textAlign="center">
        This example uses react-intl's useIntl hook to translate Form's required
        error message.
      </Paragraph>
      <Form
        messages={{
          required: intl.formatMessage({ id: 'form.errorMsg' }),
        }}
        validate="blur"
      >
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
        <Button onClick={() => changeLanguage('en-US')} label="English" />
        <Button onClick={() => changeLanguage('es-MX')} label="Spanish" />
      </Box>
      <Link to={`/react-intl`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

export default FormIntl;
