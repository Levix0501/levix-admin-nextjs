'use client';
import { ReactNode, createContext, useEffect, useState } from 'react';

import { appConfig } from '@/configs/appConfig';
import { useCookieValue } from '../hooks/useCookieValue';
import { useSystemTheme } from '../hooks/useSystemTheme';
import { Settings } from '../types/settings';
import { isDarkTheme } from '../utils/theme';

export type SettingsContextProps = {
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
};

type SettingsProviderProps = {
  children: ReactNode;
  serverSettingsCookie: Settings;
};

export const SettingsContext = createContext<SettingsContextProps | null>(null);

export const SettingsProvider = ({
  children,
  serverSettingsCookie,
}: SettingsProviderProps) => {
  const systemTheme = useSystemTheme();
  const [settingsCookie, updateSettingsCookie] = useCookieValue(
    appConfig.settingsCookieName,
    serverSettingsCookie
  );

  const [settings, setSettings] = useState<Settings>(settingsCookie);

  const updateSettings = (_settings: Partial<Settings>) => {
    const newVal = { ...settings, ..._settings };
    setSettings(newVal);
    updateSettingsCookie(newVal);
  };

  useEffect(() => {
    updateSettings({
      systemTheme,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemTheme]);

  useEffect(() => {
    if (
      isDarkTheme(settings.themeMode ?? appConfig.defaultThemeMode, systemTheme)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings.themeMode, systemTheme]);

  return (
    <SettingsContext.Provider value={{ settings: settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
