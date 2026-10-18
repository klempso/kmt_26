import React from 'react';

const IMAGES = [
	'/images/partner-1.png',
	'/images/partner-2.jpg',
	'/images/partner-3.jpg',
	'/images/partner-5.jpg',
	'/images/partner-6.jpg',
	'/images/partner-7.webp',
	'/images/partner-8.jpg',
];

const Partners = () => {
	return (
		<section className='kmt-partners'>
			<div className='kmt-partners-carousel'>
				{[0, 1].map((copy) => (
					<div className='kmt-group' key={copy} aria-hidden={copy === 1}>
						{IMAGES.map((src) => (
							<div className='kmt-image-card' key={src}>
								<img src={src} alt='' loading='lazy' decoding='async' />
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export default Partners;
