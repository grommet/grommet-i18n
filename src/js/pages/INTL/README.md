# Grommet and react-intl quick start guide

#### Resources

[Grommet Starter App](https://github.com/grommet/grommet-starter-new-app "Grommet Starter App")

[react-intl getting started guide](https://github.com/formatjs/react-intl/blob/master/docs/Getting-Started.md#intro-guides "react-intl getting started guide")

#### Installation and setup

**Grommet**

Install and set up your grommet app using the **Getting Started**, **Cleaning Up**, and **Adding Grommet** sections of the [Grommet Starter App](https://github.com/grommet/grommet-starter-new-app "Grommet Starter App") guide.

**react-intl**

Install react-intl.

```bash
yarn add react-intl
```

#### Translating your first grommet component

**Translation files**

Within the src directory create a folder titled **languages**, and within that create two files titled **en-US.json** and **haw.json**.
  

![language-files](public/tutorial/language-files.png "Translation-Example")

In the **en-US.json** file add these lines of code,

```javascript
{
"simple.greeting":  "Good morning"
}
```

and in the **haw.json** translation file and these lines of code.

```javascript
{
"simple.greeting":  "Aloha Kakahiaka"
}
```

**IntlProvider**

In  **index.js** import the IntlProvider, and wrap the root component with it.
```javascript
import { IntlProvider } from  'react-intl';
```

```javascript
ReactDOM.render(
  <IntlProvider>
    <App  />
  </IntlProvider>,
document.getElementById('root'),
);
```

Next import your translation files.

```javascript
import English from  './languages/en-US.json';
import Hawaiian from  './languages/haw.json';
```

IntlProvider accepts a number of configuration props, the two that we will leverage for this tutorial will be **locale** (the user's specific locale) and **messages** (the translation file).

```javascript
ReactDOM.render(
  <IntlProvider locale={navigator.language} messages={English}>
    <App  />
  </IntlProvider>,
document.getElementById('root'),
);
```

**FormattedMessage component and the useIntl hook**

In **app.js** add these lines of code.

```javascript
import React from  "react";
import { Box, Grommet, grommet, Paragraph } from  "grommet";

const  App  =  ()  => {	
return (
  <Grommet  theme={grommet}>
    <Box>
      <Paragraph>hello</Paragraph>
    </Box>
  </Grommet>
  );
};

export  default App
```

To use the [FormattedMessage](https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage "Formatted Message docs") component supplied by react-intl first you will have to import it.

```javascript
import React from  "react";
// import here
import { FormattedMessage } from  'react-intl';
import { Box, Grommet, grommet, Paragraph } from  "grommet";

const  App  =  ()  => {
  return (
    <Grommet  theme={grommet}>
      <Box>
        <Paragraph>hello</Paragraph>
      </Box>
    </Grommet>
  );
};

export  default App
```

Next, wrap the text within the Paragraph component with react-intl's FormattedMessage component. Formatted message accepts an id prop (the key of the message in your translation file), and a defaultMessage (a fallback message) prop.

```javascript
// simple.greeting was defined in our en-US and haw json files.
<Paragraph><FormattedMessage id="simple.greeting" defaultMessage="Hello" /></Paragraph>
```  

Running your app now should display your enlgish greeting of good morning. To display the hawaiian greeting for good morning change the value of react-intl's IntlProvider messages prop to Hawaiian.

```javascript
ReactDOM.render(
  <IntlProvider  locale={userLocale} messages={Hawaiian}>
    <App  />
  </IntlProvider>,
  document.getElementById('root'),
);
```
