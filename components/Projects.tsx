'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { Diamond, MapPin, Square } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Project = {
	country: string;
	city: string;
	size: string;
	info: string;
	images: string[];
};

const DATA: Project[] = [
	{
		country: 'Nemčija',
		city: 'Berlin',
		size: '2.000',
		info: 'Warehouse',
		images: [
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-2-mod.jpg',
			'/images/banner-3-mod.jpg',
			'/images/avstrija-1-mod.jpg',
		],
	},
	{
		country: 'Francija',
		city: 'Paris',
		size: '1.500',
		info: 'Stockpile',
		images: [
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
		],
	},
	{
		country: 'Norveška',
		city: 'Oslo',
		size: '1.800',
		info: 'Warehouse',
		images: [
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
		],
	},
	{
		country: 'Hrvaška',
		city: 'Osijek',
		size: '2.500',
		info: 'Warehouse',
		images: [
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
		],
	},
	{
		country: 'Danska',
		city: 'Kopenhagem',
		size: '1.200',
		info: 'Warehouse',
		images: [
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
			'/images/avstrija-1-mod.jpg',
		],
	},
];

const Projects = ({ projects = DATA }: { projects?: Project[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const rootRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.from('.kmt-projects-container', {
				y: 40,
				autoAlpha: 0,
				duration: 1.4,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: rootRef.current,
					start: 'top 60%',
					toggleActions: 'play none none reverse',
				},
			});
		},
		{ scope: rootRef },
	);

	const active = projects[activeIndex];
	if (!active) return null;

	const gallery = active.images.slice(0, 3);

	return (
		<section className='kmt-projects' id='projects' ref={rootRef}>
			<div className='kmt-projects-container'>
				<div className='kmt-projects-title'>
					<h2 className='kmt-title'>Naši projekti</h2>
					<p className='kmt-subtitle'>
						Pokrivamo vse evropske države in celotno Slovenijo
					</p>
				</div>

				<div className='kmt-projects-line' />

				<nav className='kmt-projects-nav'>
					<div className='kmt-projects-nav-items'>
						{projects.map((item, i) => (
							<button
								key={item.country}
								type='button'
								className='kmt-projects-tab'
								data-active={i === activeIndex || undefined}
								onClick={() => setActiveIndex(i)}
							>
								{item.country}
							</button>
						))}
					</div>
				</nav>

				<div className='kmt-projects-details'>
					<h3 className='kmt-projects-country'>{active.country}</h3>

					<dl className='kmt-projects-meta'>
						<div className='kmt-meta-item'>
							<MapPin size={24} strokeWidth={1} />
							<span>{active.city}</span>
						</div>
						<div className='kmt-meta-item'>
							<Square size={24} strokeWidth={1} />
							<span>
								{active.size} m<sup>2</sup>
							</span>
						</div>
						<div className='kmt-meta-item'>
							<Diamond size={17} strokeWidth={1.75} />
							<span>{active.info}</span>
						</div>
					</dl>
				</div>

				<div className='kmt-projects-gallery' key={active.country}>
					{gallery.map((src, i) => (
						<figure
							key={`${active.country}-${i}`}
							className='kmt-gallery-cell'
							data-lead={i === 0 || undefined}
						>
							<Image
								src={src}
								alt={`${active.country} — ${active.info} ${i + 1}`}
								fill
								sizes={
									i === 0
										? '(max-width: 48rem) 80vw, 62vw'
										: '(max-width: 48rem) 80vw, 33vw'
								}
								priority={i === 0}
							/>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
