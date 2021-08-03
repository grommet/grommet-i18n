import { useTranslation } from 'react-i18next';

import { Grommet, grommet } from 'grommet';

export const GrommetI18next = (props) => {
  const { t } = useTranslation();

  return (
    <Grommet
      theme={grommet}
      full
      messages={{ format: ({id}) => t(id)}}
      {...props}
    />
  );
};
