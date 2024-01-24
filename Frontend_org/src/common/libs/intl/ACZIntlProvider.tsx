import { IntlProvider } from 'react-intl';
import { useState, useEffect } from 'react';
import enLang from '../../../locales/en.json';

export function ACZIntlProvider({ children }: any) {
  const [lang, setLang] = useState('en');
  const [messages, setMessages] = useState({ ...enLang });

  useEffect(() => {
    const lang =  'en';

    if (lang === 'en') return setMessages({ ...enLang });

    Promise.all([
      import(`../../../locales/${lang}.json`),
    ])
      .then(([langData]) => {
        setMessages(Object.assign(langData.default));
        setLang(lang);
      })
      .catch((err) => {
        // Handle error
        console.log('Intl Error', err);
      });
  }, []);

  return (
    <IntlProvider locale={lang} messages={messages} defaultLocale={lang}>
      {children}
    </IntlProvider>
  );
}
