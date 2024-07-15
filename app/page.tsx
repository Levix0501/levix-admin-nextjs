import ThemeChanger from '@core/components/theme-changer/ThemeChanger';
import Logo from '@config/svg/Logo';
import BrandColorPicker from '@core/components/BrandColorPicker';

export default function Home() {
  return (
    <main className="h-screen flex justify-center">
      <div className="space-y-4">
        <div>
          <p>Logo</p>
          <Logo width={48} height={48} />
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
