import { Theme, ThemeMode } from '@core/types/settings';

export type AppConfig = {
  settingsCookieName: string;
  defaultThemeMode: ThemeMode;
  defaultSystemTheme: Theme;
  cssVarKey: string;
  primaryColor: string;
  primaryColorPresets: string[];
};

export const appConfig: AppConfig = {
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
