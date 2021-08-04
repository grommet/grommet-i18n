import React, { Suspense, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, Heading, Paragraph } from 'grommet';
import { Link } from 'react-router-dom';
import { GrommetI18next } from '../../../../components/GrommetI18next';

const RTLI18next = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanuage] = useState('en');

  const changeLanguage = (lng) => {
    if (lng !== language) {
      setLanuage(lng);
      i18n.changeLanguage(lng);
    }
  };

  return (
    <GrommetI18next>
      <Box dir={t('rtl.dir')}>
        <Box
          margin="small"
          dir={t('rtl')}
          direction="row"
          align="center"
          pad="small"
          gap="small"
          border
        >
          <Box direction="row" align="center" pad="small">
            {t('rtl.greeting')}
          </Box>
        </Box>
        <Box gap="small" align="center">
          <Paragraph>Change from English to Hebrew</Paragraph>
          <Button onClick={() => changeLanguage('eng')} label="English" />
          <Button onClick={() => changeLanguage('heb')} label="Hebrew" />
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
      <RTLI18next />
    </Suspense>
  );
};
