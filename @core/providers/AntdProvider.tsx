'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from 'antd-style';

import { appConfig } from '@config/appConfig';
import { useSettings } from '../hooks/useSettings';
import { getTheme } from '../utils/theme';

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const { settings, getSettings } = useSettings();
  const { themeMode, systemTheme, primaryColor } = getSettings();

  return (
    <AntdRegistry>
      <ThemeProvider
        defaultAppearance={settings.themeMode}
        themeMode={getTheme(themeMode, systemTheme)}
        theme={{
          cssVar: { key: appConfig.cssVarKey, prefix: 'lx' },
          token: { colorPrimary: primaryColor },
        }}
      >
        {children}
      </ThemeProvider>
    </AntdRegistry>
  );
};
