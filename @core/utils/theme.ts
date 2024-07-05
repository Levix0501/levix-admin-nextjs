import { Theme, ThemeMode } from '../types/settings';

export const isDarkTheme = (themeMode: ThemeMode, systemTheme: Theme) =>
  themeMode === 'dark' || (themeMode === 'system' && systemTheme === 'dark');

export const getTheme = (themeMode: ThemeMode, systemTheme: Theme): Theme => {
  return isDarkTheme(themeMode, systemTheme) ? 'dark' : 'light';
};
