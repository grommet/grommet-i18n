import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import English from '../languages/en-US.json';
import Spanish from '../languages/es-MX.json';
import Hawaiian from '../languages/haw.json';
import German from '../languages/de-de.json';
import Hebrew from '../languages/he.json';

export const Context = React.createContext();

const userLocale = navigator.language;

let lang;

const setLanguage = (userLocale) => {
  switch (userLocale) {
    case 'en-US':
      lang = English;
      break;
    case 'es-MX':
      lang = Spanish;
      break;
    case 'de-de':
      lang = German;
      break;
    case 'haw':
      lang = Hawaiian;
      break;
    case 'he':
      lang = Hebrew;
      break;
    default:
      break;
  }
};

setLanguage(userLocale);

const IntlWrapper = (props) => {
  const [locale, setLocale] = useState(userLocale);
  const [messages, setMessages] = useState(lang);

  const changeLocale = (newLocale) => {
    switch (newLocale) {
      case 'en-US':
        setMessages(English);
        setLocale(newLocale);
        break;
      case 'es-MX':
        setMessages(Spanish);
        setLocale(newLocale);
        break;
      case 'de-de':
        setMessages(German);
        setLocale(newLocale);
        break;
      case 'haw':
        setMessages(Hawaiian);
        setLocale(newLocale);
        break;
      case 'he':
        setMessages(Hebrew);
        setLocale(newLocale);
        break;
      default:
        break;
    }
  };

  return (
    <Context.Provider value={{ locale, changeLocale }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default IntlWrapper;
