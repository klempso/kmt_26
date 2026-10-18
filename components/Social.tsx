'use client';

import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Social = () => {
	const rootRef = useRef<HTMLElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: '.kmt-social-grid',
					start: 'top 75%',
					toggleActions: 'play none none reverse',
				},
				defaults: { duration: 2, ease: 'power3.out' },
			});

			tl.from('.kmt-social-header', { y: 26, autoAlpha: 0, duration: 1 })
				.from('.kmt-social-feature', { x: -56, autoAlpha: 0 }, 0.15)
				.from(
					'.kmt-social-stack > *',
					{ x: 56, autoAlpha: 0, stagger: 0.12 },
					0.28,
				);
		},
		{ scope: rootRef },
	);

	return (
		<section className='kmt-social' id='social' ref={rootRef}>
			<div className='kmt-social-container'>
				<header className='kmt-social-header'>
					<h2 className='kmt-title'>Spremljajte nas</h2>
					<p className='kmt-subtitle'>
						Novosti, posnetki s terena in pogled v zakulisje naših projektov po
						vsej Evropi.
					</p>
				</header>

				<div className='kmt-social-grid'>
					{/* ---------- YouTube ---------- */}
					<div className='kmt-social-card kmt-social-feature'>
						<div className='kmt-social-top'>
							<div className='kmt-social-id'>
								<span className='kmt-social-tile kmt-social-tile-yt'>
									<SiYoutube size={22} />
								</span>
								<div>
									<h3 className='kmt-social-name'>Uradni kanal</h3>
									<p className='kmt-social-meta'>Posnetki naših projektov</p>
								</div>
							</div>

							<a
								href='https://youtube.com'
								className='kmt-social-btn'
								target='_blank'
								rel='noreferrer'
							>
								Naroči se
							</a>
						</div>

						<a
							href='https://youtube.com'
							className='kmt-social-video'
							target='_blank'
							rel='noreferrer'
						>
							<img src='/images/avstrija-1-mod.jpg' alt='' />

							<span className='kmt-social-veil'>
								<span className='kmt-social-tile kmt-social-tile-yt'>
									<SiYoutube size={22} />
								</span>
							</span>

							<span className='kmt-social-caption'>
								Montaža hale 2.000 m² — Gradec, Avstrija
							</span>
						</a>
					</div>

					{/* ---------- Instagram + Facebook ---------- */}
					<div className='kmt-social-stack'>
						<a
							href='https://instagram.com'
							className='kmt-social-card kmt-social-link'
							target='_blank'
							rel='noreferrer'
						>
							<div className='kmt-social-top'>
								<span className='kmt-social-tile kmt-social-tile-ig'>
									<SiInstagram size={22} />
								</span>
								<ArrowUpRight className='kmt-social-arrow' size={20} />
							</div>

							<div className='kmt-social-body'>
								<h3 className='kmt-social-title'>Instagram</h3>
								<p className='kmt-social-copy'>
									Fotografije s terena in utrinki iz delavnice.
								</p>

								<div className='kmt-social-avatars'>
									<span className='kmt-social-avatar' />
									<span className='kmt-social-avatar' />
									<span className='kmt-social-avatar' />
									<span className='kmt-social-avatar' />
									<span className='kmt-social-avatar kmt-social-avatar-more'>
										+1k
									</span>
								</div>
							</div>
						</a>

						<a
							href='https://facebook.com'
							className='kmt-social-card kmt-social-link'
							target='_blank'
							rel='noreferrer'
						>
							<div className='kmt-social-top'>
								<span className='kmt-social-tile kmt-social-tile-fb'>
									<SiFacebook size={22} />
								</span>
								<ArrowUpRight className='kmt-social-arrow' size={20} />
							</div>

							<div className='kmt-social-body'>
								<h3 className='kmt-social-title'>Facebook</h3>
								<p className='kmt-social-copy'>
									Novice, sejmi in obvestila o dogodkih.
								</p>

								<div className='kmt-social-stat'>
									<span className='kmt-social-stat-num'>2,4k</span>
									<span className='kmt-social-stat-cap'>Sledilcev</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Social;
