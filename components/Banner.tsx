'use client';
import React, { useRef } from 'react';
import { words } from '@/constants/index';
import Button from './Button';
import HeroRoom from './Hero/HeroRoom';
import { PlayIcon } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
	const rootRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				defaults: { ease: 'power3.out', duration: 0.9 },
			});

			tl.from('.kmt-banner-left', { x: -60, opacity: 0 })
				.from('.kmt-banner-right', { x: 60, opacity: 0 }, 0.15)
				.from(
					'.kmt-stat',
					{ y: 28, opacity: 0, duration: 0.6, stagger: 0.09 },
					0.5,
				);

			// Dock the icon once the actions row leaves the viewport
			gsap.fromTo(
				'.kmt-dock',
				{ autoAlpha: 0, x: -40, scale: 1 },
				{
					autoAlpha: 1,
					x: 20,
					scale: 1,
					duration: 1,
					ease: 'power3.out',
					scrollTrigger: {
						trigger: '.kmt-banner-actions',
						start: 'bottom top+=80',
						toggleActions: 'play none none reverse',
					},
				},
			);
		},
		{ scope: rootRef },
	);

	return (
		<section className='kmt-banner' id='top' ref={rootRef}>
			<div className='kmt-banner-left'>
				<h1 className='kmt-banner-title'>
					Montaža in prodaja
					<br />
					<em>hal in šotorov</em> ter pagod.
				</h1>

				<span className='kmt-slide'>
					<span className='kmt-slide-wrapper'>
						{words.map((word) => (
							<span key={word.text}>{word.text}.</span>
						))}
					</span>
				</span>

				<p className='kmt-banner-copy'>
					Podjetje z večletno tradicijo, mednarodnimi izkušnjami in evropskimi
					standardi.
				</p>

				<div className='kmt-banner-actions'>
					<Button icon={PlayIcon}>Naši projekti</Button>
					<Button className='kmt-btn-ghost'>Naše podjetje</Button>
				</div>
			</div>

			<div className='kmt-banner-right'>
				<HeroRoom />
			</div>

			<div className='kmt-stats'>
				<div className='kmt-stat'>
					<div className='kmt-stat-num'>15+</div>
					<div className='kmt-stat-cap'>Let delovanja</div>
				</div>
				<div className='kmt-stat'>
					<div className='kmt-stat-num'>240+</div>
					<div className='kmt-stat-cap'>Zaključenih projektov</div>
				</div>
				<div className='kmt-stat'>
					<div className='kmt-stat-num'>1000+</div>
					<div className='kmt-stat-cap'>Postavljenih objektov</div>
				</div>
				<div className='kmt-stat'>
					<div className='kmt-stat-num'>15</div>
					<div className='kmt-stat-cap'>Evropskih držav</div>
				</div>
			</div>

			<a href='#projects' className='kmt-dock' aria-label='Naši projekti'>
				<PlayIcon size={40} strokeWidth={2.4} />
			</a>
		</section>
	);
};

export default Banner;
