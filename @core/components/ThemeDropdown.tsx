'use client';

import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';
import { appConfig } from '@/configs/appConfig';
import { useSettings } from '../hooks/useSettings';
import { ThemeMode } from '../types/settings';

const ThemeDropdown = () => {
  const { settings, updateSettings } = useSettings();
  const themeMode = settings.themeMode ?? appConfig.defaultThemeMode;

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: 'Light',
      icon: <Sun />,
    },
    {
      key: 'dark',
      label: 'Dark',
      icon: <Moon />,
    },
    {
      key: 'system',
      label: 'System',
      icon: <LaptopMinimal />,
    },
  ];

  const onSelect = (key: string) => {
    updateSettings({ themeMode: key as ThemeMode });
  };

  return (
    <Dropdown
      menu={{
        items,
        selectable: true,
        selectedKeys: [themeMode],
        onSelect: (e) => onSelect(e.key),
      }}
    >
      <div className="relative w-6 h-6" role="button">
        <Sun className="absolute h-full w-full rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-full w-full rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </div>
    </Dropdown>
  );
};

export default ThemeDropdown;
