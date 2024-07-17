'use client';

import { cn } from '@core/utils/css';
import { useSettings } from '@core/hooks/useSettings';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';
import { ThemeMode } from '@core/types/settings';
import { ReactNode } from 'react';

export const themeChangerItems: {
  key: ThemeMode;
  label: string;
  icon: ReactNode;
}[] = [
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

const ThemeChanger = () => {
  const { updateSettings, getSettings } = useSettings();
  const themeMode = getSettings().themeMode;

  return (
    <div className="flex space-x-2">
      {themeChangerItems.map((item) => (
        <div
          role="button"
          key={item.key}
          className={cn(
            'w-[100px] h-[50px] flex justify-center items-center border rounded',
            {
              'outline outline-1 outline-primary border-primary text-primary':
                themeMode === item.key,
            }
          )}
          onClick={() => updateSettings({ themeMode: item.key })}
          onKeyDown={() => updateSettings({ themeMode: item.key })}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default ThemeChanger;
