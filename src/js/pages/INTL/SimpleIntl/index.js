import React, { useContext } from 'react';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Context } from '../../../../components/IntlWrapper';

const SimpleIntl = () => {
  const context = useContext(Context);
  const { changeLocale } = context;

  return (
    <Box align="center">
      <Paragraph textAlign="center">
        This example uses react-intl's FormattedMessage component to translate
        text within grommet's paragraph component.
      </Paragraph>
      <Paragraph>
        <FormattedMessage id="simple.greeting" defaultMessage="Hello" />
      </Paragraph>
      <Box gap="small" align="center">
        <Paragraph>Change from English to Hawaiian</Paragraph>
        <Button onClick={() => changeLocale('en-US')} label="English" />
        <Button onClick={() => changeLocale('haw')} label="Hawaiian" />
      </Box>
      <Box gap="small" align="center"></Box>
      <Link to={`/react-intl`}>
        <Heading level="4">Back</Heading>
      </Link>
    </Box>
  );
};

export default SimpleIntl;
