import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Partners from '@/components/Partners';
import Ponudba from '@/components/Ponudba';
import Projects from '@/components/Projects';
import Social from '@/components/Social';
import Experience from '@/components/Storitve';
import { PONUDBA_FALLBACK } from '@/constants/ponudbaFallback';
import { client } from '@/sanity/lib/client';
import { ponudbaQuery } from '@/sanity/queries';
import type { Ponudba as PonudbaType } from '@/types/ponudba';

export default async function Home() {
	const ponudba = await client.fetch<PonudbaType>(ponudbaQuery);
	const ponudbaData = ponudba?.items?.length ? ponudba : PONUDBA_FALLBACK;

	return (
		<>
			<Banner />
			<Partners />
			<Gallery />

			<Projects />
			<Experience />
			<Social />
			<Footer />
		</>
	);
}
