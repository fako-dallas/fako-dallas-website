'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  locale: string;
  setLocale: (locale: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en');

  return (
    <AppContext.Provider value={{ locale, setLocale }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
