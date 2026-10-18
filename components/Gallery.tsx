'use client';

import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type GalleryItem = {
	src: string;
	title: string;
	text: string;
	meta?: string;
};

const DEFAULT_ITEMS: GalleryItem[] = [
	{
		src: '/images/avstrija-1-mod.jpg',
		title: 'Montažne hale',
		meta: 'Gradec, Avstrija',
		text: 'Jeklena konstrukcija 2.000 m² s pripadajočimi pisarniškimi prostori. Montaža je bila zaključena v šestih tednih, brez prekinitve obratovanja sosednjih objektov.',
	},
	{
		src: '/images/banner-3-mod.jpg',
		title: 'Šotori in pagode',
		meta: 'Berlin, Nemčija',
		text: 'Visokoregalno skladišče z izoliranimi paneli in dvižnimi vrati. Projekt je vključeval temeljenje, konstrukcijo in celotno zunanjo oblogo.',
	},
	{
		src: '/images/podjetje.jpg',
		title: 'Montaža in prodaja',
		meta: 'Pariz, Francija',
		text: 'Postavitev za mednarodni sejem s kapaciteto 800 obiskovalcev. Celotna konstrukcija je bila postavljena in demontirana v petih dneh.',
	},
	{
		src: '/images/avstrija-1-mod.jpg',
		title: 'Strokovno svetovanje',
		meta: 'Rim, Italija',
		text: 'Serija pagod za promocijski dogodek na prostem. Konstrukcije so bile prilagojene vetrnim obremenitvam ob obali.',
	},
];

const Gallery = ({ items = DEFAULT_ITEMS }: { items?: GalleryItem[] }) => {
	const [active, setActive] = useState(0);
	const rootRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: rootRef.current,
					start: 'top 55%',
					toggleActions: 'play none none reverse',
				},
				defaults: { ease: 'power2.out', duration: 1.4 },
			});

			tl.from('.kmt-title, .kmt-subtitle', {
				y: 26,
				autoAlpha: 0,
				duration: 1,
				stagger: 0.08,
			})
				.from('.kmt-gallery-wrap', { x: -70, autoAlpha: 0 }, 0.2)
				.from('.kmt-gallery-panel', { x: 70, autoAlpha: 0 }, 0.35);
		},
		{ scope: rootRef },
	);

	if (!items.length) return null;

	const current = items[active] ?? items[0];

	return (
		<section className='kmt-gallery' id='gallery' ref={rootRef}>
			<div className='kmt-gallery-container'>
				<h2 className='kmt-title'>Naša ponudba in storitve</h2>
				<h2 className='kmt-subtitle'>Naša ponudba in storitve</h2>

				<div className='kmt-gallery-grid'>
					<div className='kmt-gallery-wrap'>
						{items.map((item, i) => (
							<div
								key={`${item.src}-${i}`}
								className='kmt-gallery-item'
								data-active={i === active || undefined}
								onMouseEnter={() => setActive(i)}
								title={item.title}
							>
								<div
									className='kmt-gallery-img'
									style={{ backgroundImage: `url('${item.src}')` }}
								/>
							</div>
						))}
					</div>

					<aside className='kmt-gallery-panel'>
						{/* key forces a remount so the fade replays on every change */}
						<div className='kmt-gallery-panel-inner' key={active}>
							<span className='kmt-gallery-panel-index'>
								{String(active + 1).padStart(2, '0')}
								<span className='kmt-gallery-panel-total'>
									/ {String(items.length).padStart(2, '0')}
								</span>
							</span>

							<h3 className='kmt-gallery-panel-title'>{current.title}</h3>
							<p className='kmt-gallery-panel-text'>{current.text}</p>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
