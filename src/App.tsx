import React from 'react';
import { ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';

import arEG from 'antd/lib/locale/ar_EG';
import enUS from 'antd/lib/locale/en_US';

import { themeObject } from './styles/themes';
import GlobalStyle from './styles/global.styles';
import { AppRouter } from './components/routers/AppRouter';

import {
  useAppSelector,
  useLanguage,
  useAutoNightMode,
  usePWA,
  useThemeWatcher,
} from './hooks'


const App: React.FC = () => {
  
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <HelmetProvider>
        <ConfigProvider locale={language === 'en' ? enUS : arEG}>
          <AppRouter />
        </ConfigProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
