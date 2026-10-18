import React from 'react';

const Navbar = () => {
	return (
		<nav className='kmt-nav'>
			<div className='kmt-nav-inner'>
				<div className='kmt-nav-group'>
					<a href='#what-we-do'>Naše podjetje</a>
					<a href='#projects'>Reference podjetja</a>
				</div>

				<a href='#top' className='kmt-nav-logo'>
					<img src='/images/logo_666.png' alt='Home' />
				</a>

				<div className='kmt-nav-group kmt-nav-group-right'>
					<a href='#careers'>Kariera pri nas</a>
					<a href='#contact' className='kmt-nav-cta'>
						Kontaktirajte nas
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
