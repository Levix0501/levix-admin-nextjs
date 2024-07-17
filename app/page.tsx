import ThemeChanger from '@core/components/theme-changer/ThemeChanger';
import BrandColorPicker from '@core/components/BrandColorPicker';
import { appConfig } from '@config/appConfig';

export default function Home() {
  return (
    <main className="h-screen flex justify-center pt-10">
      <div className="space-y-4">
        <div>
          <p>Logo</p>
          {appConfig.logo}
        </div>

        <div>
          <p>主题</p>
          <ThemeChanger />
        </div>

        <div>
          <p>品牌色</p>
          <BrandColorPicker />
        </div>
      </div>
    </main>
  );
}
