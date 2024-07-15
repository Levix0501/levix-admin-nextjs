'use client';

import { Dropdown } from 'antd';
import { Moon, Sun } from 'lucide-react';
import { useSettings } from '../../hooks/useSettings';
import { ThemeMode } from '../../types/settings';
import { themeChangerItems } from './ThemeChanger';

const ThemeDropdown = () => {
  const { updateSettings, getSettings } = useSettings();
  const themeMode = getSettings().themeMode;

  const onSelect = (key: string) => {
    updateSettings({ themeMode: key as ThemeMode });
  };

  return (
    <Dropdown
      menu={{
        items: themeChangerItems,
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
