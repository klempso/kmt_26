'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import type { Ponudba } from '@/types/ponudba';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ROTATE_MS = 8000;

const Ponudba = ({ data }: { data: Ponudba }) => {
	const items = useMemo(() => data?.items ?? [], [data]);
	const [active, setActive] = useState(items[0]?._key ?? '');
	const [paused, setPaused] = useState(false);
	const rootRef = useRef<HTMLElement>(null);

	const activeIndex = Math.max(
		0,
		items.findIndex((i) => i._key === active),
	);

	const goNext = useCallback(() => {
		if (!items.length) return;
		const next = (activeIndex + 1) % items.length;
		setActive(items[next]._key);
	}, [activeIndex, items]);

	// Re-armed on every value change, so a manual click resets the clock
	useEffect(() => {
		if (paused || items.length < 2) return;
		const t = setTimeout(goNext, ROTATE_MS);
		return () => clearTimeout(t);
	}, [active, paused, goNext, items.length]);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: rootRef.current,
					start: 'top 75%',
					toggleActions: 'play none none reverse',
				},
				defaults: { ease: 'power2.out', duration: 1.4 },
			});

			tl.from('.kmt-ponudba-title', { y: 30, autoAlpha: 0, duration: 1 })
				.from('.kmt-ponudba-left', { x: -70, autoAlpha: 0 }, 0.2)
				.from('.kmt-ponudba-right', { x: 70, autoAlpha: 0 }, 0.35);
		},
		{ scope: rootRef },
	);

	if (!items.length) return null;

	return (
		<section
			className='kmt-ponudba'
			ref={rootRef}
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div className='kmt-ponudba-title'>
				<h2 className='kmt-title'>Naša ponudba in storitve</h2>
				<p className='kmt-subtitle'>
					Nudimo polno enih stvarih, ki jih drugi ne :)
				</p>
			</div>

			<div className='kmt-ponudba-left'>
				{items.map((item, i) => (
					<div
						className='kmt-ponudba-media'
						data-active={item._key === active}
						key={item._key}
					>
						{item.image ? (
							<Image
								src={item.image}
								alt={item.title}
								fill
								priority={i === 0}
							/>
						) : (
							<div
								className='kmt-ponudba-placeholder'
								style={{ background: ['#f00', '#0f0', '#00f', '#ff0'][i] }}
							/>
						)}
					</div>
				))}
			</div>

			<div className='kmt-ponudba-right'>
				<Accordion
					openMultiple={false}
					value={active ? [active] : []}
					onValueChange={(v) => v[0] && setActive(String(v[0]))}
					className='kmt-acc'
					style={{ '--rotate-ms': `${ROTATE_MS}ms` } as React.CSSProperties}
				>
					{items.map((item) => {
						const Icon = (Icons[item.icon as keyof typeof Icons] ??
							Icons.Circle) as LucideIcon;

						return (
							<AccordionItem
								key={item._key}
								value={item._key}
								className='kmt-acc-item'
							>
								<AccordionTrigger className='kmt-acc-trigger'>
									<Icon className='kmt-acc-icon' size={34} strokeWidth={1} />
									<span className='kmt-acc-title'>{item.title}</span>
								</AccordionTrigger>

								<AccordionContent className='kmt-acc-panel'>
									<p>{item.text}</p>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</div>
		</section>
	);
};

export default Ponudba;
