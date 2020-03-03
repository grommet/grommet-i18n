import React, { Component, Suspense } from "react";
import { useTranslation, withTranslation, Trans } from "react-i18next";
import { Grommet, grommet, Box, Button, Heading } from "grommet";

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <Heading>{t("title")}</Heading>;
  }
}
const Welcome = withTranslation()(LegacyWelcomeClass);

// Component using the Trans component
function MyComponent() {
  return (
    <Trans i18nKey="description.part1">
      To get started, edit <code>src/App.js</code> and save to reload.
    </Trans>
  );
}

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <Grommet theme={grommet}>
      <Box align="center">
        <Welcome />
        <Button onClick={() => changeLanguage("de")} label="de" />
        <Button onClick={() => changeLanguage("en")} label="en" />
      </Box>
      <Box align="center">
        <MyComponent />
        <Box>{t("description.part2")}</Box>
      </Box>
    </Grommet>
  );
}

// loading component for suspense fallback
const Loader = () => (
  <Box className="App">
    <Box>loading...</Box>
  </Box>
);

// here app catches the suspense from page in case translations are not yet loaded
export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Page />
    </Suspense>
  );
}
