import { FC, PropsWithChildren, createContext, useState } from 'react';

interface LanguageContext {
  language: string;
  changeLanguage: (language: string) => void;
}

export const LanguageContext = createContext<LanguageContext>({
  language: 'en',
  changeLanguage: () => {}
});

export const LanguageProvider: FC<PropsWithChildren> = ({ children }) => {
  const [language, setLanguage] = useState<string>('en');

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage: (language) => setLanguage(language) }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

