import 'server-only';

import { cookies } from 'next/headers';
import { appConfig } from '@config/appConfig';
import { Settings, Theme, ThemeMode } from '../types/settings';

export const getSettingsFromCookie = () => {
  const cookieStore = cookies();
  const { settingsCookieName } = appConfig;
  const cookieValue = cookieStore.get(settingsCookieName)?.value ?? '{}';
  return JSON.parse(cookieValue) as Settings;
};

export const getThemeModeFromCookie = (settings?: Settings): ThemeMode => {
  if (!settings) {
    settings = getSettingsFromCookie();
  }
  return settings.themeMode ?? appConfig.defaultThemeMode;
};

export const getSystemThemeFromCookie = (settings?: Settings): Theme => {
  if (!settings) {
    settings = getSettingsFromCookie();
  }
  return settings.systemTheme ?? appConfig.defaultSystemTheme;
};
