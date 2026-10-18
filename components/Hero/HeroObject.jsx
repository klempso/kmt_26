'use client';
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { HalaNova } from './Models/Hala_nova';
import { HalaSkupaj } from './Models/Hala_skupaj';
import { HalaKonstrukcijaNova } from './Models/Hala_konstrukcija_nova';

// Order here is the order the hero cycles through
const MODELS = [HalaNova, HalaKonstrukcijaNova, HalaSkupaj];

export const MODEL_COUNT = MODELS.length;

const HIDDEN = { x: 0.001, y: 0.001, z: 0.001 };
const SHOWN = { x: 1, y: 1, z: 1 };

export const HeroObject = ({ isMobile, activeIndex = 0 }) => {
	const groupRef = useRef();
	const partRefs = useRef([]);
	const mouse = useRef({ x: 0, y: 0 });
	const isFirst = useRef(true);

	useEffect(() => {
		if (!groupRef.current) return;
		groupRef.current.traverse((child) => {
			if (child.isMesh) {
				child.castShadow = true;
				child.receiveShadow = true;
			}
		});
	}, []);

	useEffect(() => {
		const canvas = document.querySelector('.hero-canvas');
		if (!canvas) return;

		const handleMouseMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
			mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
		};
		const handleMouseLeave = () => {
			mouse.current.x = 0;
			mouse.current.y = 0;
		};

		canvas.addEventListener('mousemove', handleMouseMove);
		canvas.addEventListener('mouseleave', handleMouseLeave);
		return () => {
			canvas.removeEventListener('mousemove', handleMouseMove);
			canvas.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, []);

	useFrame(() => {
		if (!groupRef.current) return;
		groupRef.current.rotation.y +=
			(mouse.current.x * 1 - groupRef.current.rotation.y) * 0.05;
		groupRef.current.rotation.x +=
			(mouse.current.y * 0.1 - groupRef.current.rotation.x) * 0.05;
	});

	useGSAP(
		() => {
			const parts = partRefs.current;
			if (parts.length !== MODELS.length || parts.some((p) => !p)) return;

			// First run: no animation, just set the starting state
			if (isFirst.current) {
				isFirst.current = false;
				parts.forEach((el, i) => {
					const on = i === activeIndex;
					gsap.set(el.scale, on ? SHOWN : HIDDEN);
					el.visible = on;
				});
				return;
			}

			const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

			parts.forEach((el, i) => {
				if (i === activeIndex) {
					el.visible = true;
					tl.fromTo(el.scale, HIDDEN, { ...SHOWN, duration: 0.5 }, 0.2);
				} else if (el.visible) {
					tl.to(
						el.scale,
						{
							...HIDDEN,
							duration: 0.5,
							onComplete: () => {
								el.visible = false;
							},
						},
						0,
					);
				}
			});
		},
		{ dependencies: [activeIndex] },
	);

	return (
		<group ref={groupRef} position={[-5, -2.5, 0]} scale={isMobile ? 0.7 : 1}>
			{MODELS.map((Model, i) => (
				<group
					key={i}
					ref={(el) => {
						partRefs.current[i] = el;
					}}
				>
					<Model />
				</group>
			))}
		</group>
	);
};
