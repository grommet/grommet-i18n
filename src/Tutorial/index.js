import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Box, Grommet, grommet, Paragraph } from "grommet";

const Tutorial = () => {
  const { t } = useTranslation();

  return (
    <Grommet theme={grommet}>
      <Box>
        <Paragraph>{t("greeting")}</Paragraph>
      </Box>
    </Grommet>
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
      <Tutorial />
    </Suspense>
  );
};
