import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AntdProvider } from '@core/providers/AntdProvider';
import { SettingsProvider } from '@core/providers/SettingsProvider';
import {
  getSettingsFromCookie,
  getSystemThemeFromCookie,
  getThemeModeFromCookie,
} from '@core/utils/settingsServerUtils';
import { getTheme, isDarkTheme } from '@core/utils/theme';
import '../styles/globals.scss';
import { appConfig } from '@config/appConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = getSettingsFromCookie();
  const themeMode = getThemeModeFromCookie(settings);
  const systemTheme = getSystemThemeFromCookie(settings);
  const darkCls = isDarkTheme(themeMode, systemTheme) ? 'dark' : '';

  return (
    <html lang="en" className={`${darkCls} ${appConfig.cssVarKey}`}>
      <body className={`${inter.className}`}>
        <SettingsProvider serverSettingsCookie={settings}>
          <AntdProvider>{children}</AntdProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
