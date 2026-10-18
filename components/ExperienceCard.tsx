'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { ExpCard } from '@/components/Experience/experience';

// Writes the cursor's angle (unitless degrees) onto the element under it,
// measured from that element's own centre — same maths as the old GlowCard.
const setAngle = (el: HTMLElement | null, e: React.MouseEvent) => {
	if (!el) return;

	const rect = el.getBoundingClientRect();
	const mouseX = e.clientX - rect.left - rect.width / 2;
	const mouseY = e.clientY - rect.top - rect.height / 2;

	let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
	angle = (angle + 360) % 360;

	el.style.setProperty('--start', String(angle));
};

const ExperienceCard = ({ card, index }: { card: ExpCard; index: number }) => {
	const Icon = card.icon;
	const cardRef = useRef<HTMLDivElement>(null);

	return (
		<article className='kmt-exp-row'>
			<div className='kmt-exp-media'>
				<h1>media</h1>
				{card.image ? (
					<Image
						src={card.image}
						alt={card.title}
						fill
						sizes='(max-width: 60rem) 100vw, 30vw'
					/>
				) : (
					<div className='kmt-exp-media-empty' />
				)}
			</div>

			<div className='kmt-exp-spine'>
				<div className='kmt-exp-badge'>
					<Icon size={30} strokeWidth={1.75} />
				</div>
			</div>

			<div
				className='kmt-exp-card'
				ref={cardRef}
				onMouseMove={(e) => setAngle(cardRef.current, e)}
			>
				<div className='kmt-exp-head'>
					<span className='kmt-exp-index'>
						{String(index + 1).padStart(2, '0')}
					</span>
				</div>

				<h3 className='kmt-exp-title'>{card.title}</h3>

				<p className='kmt-exp-description'>{card.description}</p>
			</div>
		</article>
	);
};

export default ExperienceCard;
