'use client';

import { ColorPicker } from 'antd';
import { useSettings } from '../hooks/useSettings';
import { appConfig } from '@/@config/appConfig';

const BrandColorPicker = () => {
  const { updateSettings, getSettings } = useSettings();

  return (
    <ColorPicker
      presets={[{ label: '预设颜色', colors: appConfig.primaryColorPresets }]}
      value={getSettings().primaryColor}
      onChange={(color) =>
        updateSettings({ primaryColor: color.toHexString() })
      }
    />
  );
};

export default BrandColorPicker;
