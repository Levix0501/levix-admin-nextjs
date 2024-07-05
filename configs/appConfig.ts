import { Theme, ThemeMode } from '@/@core/types/settings';

export type AppConfig = {
  settingsCookieName: string;
  defaultThemeMode: ThemeMode;
  defaultSystemTheme: Theme;
};

export const appConfig: AppConfig = {
  settingsCookieName: 'levix-next',
  defaultThemeMode: 'system',
  defaultSystemTheme: 'light',
};
