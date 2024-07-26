import ThemeChanger from '@core/components/theme-changer/ThemeChanger';
import BrandColorPicker from '@core/components/BrandColorPicker';
import { appConfig } from '@config/appConfig';
import Link from 'next/link';
import { LuGithub } from 'react-icons/lu';
import Image from 'next/image';

export default function Home() {
	return (
		<main className="h-screen flex justify-center pt-10">
			<div className="space-y-4">
				<div className="flex space-x-4">
					<Link
						href="https://github.com/Levix0501/levix-admin-nextjs"
						target="_blank"
					>
						<LuGithub size={24} />
					</Link>

					<Link href="https://vue-admin.fecoder.cn" target="_blank">
						Vue3 版本
					</Link>
				</div>

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
