'use client';
import { Canvas } from '@react-three/fiber';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import { OrbitControls } from '@react-three/drei';
import HeroLights from './HeroLights';
import { HeroObject, MODEL_COUNT } from './HeroObject';

const ROTATE_MS = 5000;

const HeroRoom = () => {
	const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

	const [activeIndex, setActiveIndex] = useState(0);

	// state, not a ref — OrbitControls mounts after us, and a ref mutation
	// wouldn't re-run the listener effect
	const [controls, setControls] = useState(null);

	// a ref, not state — starting a timer is a side effect and must never
	// happen inside a state updater
	const intervalRef = useRef(null);

	const stopCycle = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
	}, []);

	const startCycle = useCallback(() => {
		stopCycle();
		intervalRef.current = setInterval(
			() => setActiveIndex((i) => (i + 1) % MODEL_COUNT),
			ROTATE_MS,
		);
	}, [stopCycle]);

	useEffect(() => {
		startCycle();
		return stopCycle;
	}, [startCycle, stopCycle]);

	// Pause while the user is dragging, resume with a fresh interval after
	useEffect(() => {
		if (!controls) return;

		const onStart = () => stopCycle();
		const onEnd = () => startCycle();

		controls.addEventListener('start', onStart);
		controls.addEventListener('end', onEnd);

		return () => {
			controls.removeEventListener('start', onStart);
			controls.removeEventListener('end', onEnd);
		};
	}, [controls, startCycle, stopCycle]);

	return (
		<div className='hero-canvas'>
			<Canvas shadows camera={{ position: [-25, 7, 16], fov: 24 }}>
				<OrbitControls
					ref={setControls}
					enablePan={false}
					enableZoom={!isTablet}
					maxDistance={50}
					minDistance={5}
				/>

				<HeroLights />
				<HeroObject isMobile={isMobile} activeIndex={activeIndex} />
			</Canvas>
		</div>
	);
};

export default HeroRoom;
