import React, { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { Context } from '../../../../components/IntlWrapper';

const RTLIntl = () => {
  const intl = useIntl();
  const context = useContext(Context);
  const { changeLocale } = context;
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      changeLocale(lng);
    }
  };

  return (
    <Box dir={intl.formatMessage({ id: 'rtl' })}>
      <Box
        margin="small"
        direction="row"
        align="center"
        pad="small"
        gap="small"
        border
      >
        <Box direction="row" align="center" pad="small">
          {intl.formatMessage({ id: 'rtl.greeting' })}
        </Box>
      </Box>
      <Box gap="small" align="center">
        <Paragraph>Change from English to Hebrew</Paragraph>
        <Button onClick={() => changeLanguage('en-US')} label="English" />
        <Button onClick={() => changeLanguage('he')} label="Hebrew" />
        <Link to={`/react-intl`}>
          <Heading level="4">Back</Heading>
        </Link>
      </Box>
    </Box>
  );
};

export default RTLIntl;
