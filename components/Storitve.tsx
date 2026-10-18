'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXP_CARDS } from '@/components/Experience/experience';
import ExperienceCard from './ExperienceCard';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Experience = () => {
	const rootRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			gsap.utils.toArray<HTMLElement>('.kmt-exp-row').forEach((row) => {
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: row,
						start: 'top 75%',
						toggleActions: 'play none none reverse',
					},
					defaults: { duration: 0.8, ease: 'power3.out' },
				});

				tl.from(row.querySelector('.kmt-exp-media'), { x: -40, autoAlpha: 0 })
					.from(
						row.querySelector('.kmt-exp-card'),
						{ x: 40, autoAlpha: 0 },
						0.1,
					)
					.from(
						row.querySelector('.kmt-exp-badge'),
						{ scale: 0.6, autoAlpha: 0, duration: 0.6 },
						0.2,
					);
			});

			gsap.fromTo(
				'.kmt-exp-line',
				{ scaleY: 0 },
				{
					scaleY: 1,
					transformOrigin: 'top top',
					ease: 'none',
					scrollTrigger: {
						trigger: '.kmt-exp-list',
						start: 'top 95%',
						end: 'bottom 60%',
						scrub: 1,
					},
				},
			);
		},
		{ scope: rootRef },
	);

	return (
		<section className='kmt-exp' id='experience' ref={rootRef}>
			<header className='kmt-exp-header'>
				<h1 className='kmt-title'>Od ideje do realizacije</h1>
				<h2 className='kmt-subtitle'>Le nekaj korakov do novih prostorov</h2>
			</header>

			<div className='kmt-exp-list'>
				<span className='kmt-exp-track' aria-hidden='true'>
					<span className='kmt-exp-line' />
				</span>

				{EXP_CARDS.map((card, i) => (
					<ExperienceCard key={card.id} card={card} index={i} />
				))}
			</div>
		</section>
	);
};

export default Experience;
