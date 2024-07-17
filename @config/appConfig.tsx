import { Theme, ThemeMode } from '@core/types/settings';
import { ReactNode } from 'react';
import Logo from '@core/components/Logo';

export type AppConfig = {
  logo: ReactNode;
  settingsCookieName: string;
  defaultThemeMode: ThemeMode;
  defaultSystemTheme: Theme;
  cssVarKey: string;
  primaryColor: string;
  primaryColorPresets: string[];
};

export const appConfig: AppConfig = {
  logo: <Logo width={48} height={48} />,
  settingsCookieName: 'levix-next',
  defaultThemeMode: 'system',
  defaultSystemTheme: 'light',
  cssVarKey: 'levix',
  primaryColor: '#7367F0',
  primaryColorPresets: [
    '#7367F0',
    '#1677FF',
    '#722ED1',
    '#13C2C2',
    '#52C41A',
    '#EB2F96',
    '#F5222D',
    '#FA8C16',
    '#FADB14',
    '#FA541C',
    '#2F54EB',
    '#FAAD14',
    '#A0D911',
    '#000000',
  ],
};
