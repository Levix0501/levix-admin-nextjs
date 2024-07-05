'use client';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from 'antd-style';

import { useSettings } from '../hooks/useSettings';
import { appConfig } from '@/configs/appConfig';
import { getTheme } from '../utils/theme';

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  const { settings } = useSettings();

  return (
    <AntdRegistry>
      <ThemeProvider
        themeMode={getTheme(
          settings.themeMode ?? appConfig.defaultThemeMode,
          settings.systemTheme ?? appConfig.defaultSystemTheme
        )}
      >
        {/* <ConfigProvider> */}
        {children}
        {/* </ConfigProvider> */}
      </ThemeProvider>
    </AntdRegistry>
  );
};
