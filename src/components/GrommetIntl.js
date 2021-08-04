import { useIntl } from 'react-intl';

import { Grommet, grommet } from 'grommet';

export const GrommetIntl = (props) => {
  const intl = useIntl();
  return (
    <Grommet
      theme={grommet}
      full
      messages={{ format: options => intl.formatMessage(options) }}
      {...props}
    />
  );
};
