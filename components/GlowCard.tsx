'use client';

import React, { useRef } from 'react';

type GlowCardProps = {
	children: React.ReactNode;
	className?: string;
};

const GlowCard = ({ children, className = '' }: GlowCardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const card = cardRef.current;
		if (!card) return;

		// Mouse position relative to the card's centre
		const rect = card.getBoundingClientRect();
		const mouseX = e.clientX - rect.left - rect.width / 2;
		const mouseY = e.clientY - rect.top - rect.height / 2;

		// Angle, normalised to 0–360
		let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
		angle = (angle + 360) % 360;

		card.style.setProperty('--start', String(angle + 60));
	};

	return (
		<div
			ref={cardRef}
			onMouseMove={handleMouseMove}
			className={`kmt-glow-card ${className}`.trim()}
		>
			<div className='kmt-glow' />
			{children}
		</div>
	);
};

export default GlowCard;
