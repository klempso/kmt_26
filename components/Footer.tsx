import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si';

const NAV = [
	{ label: 'Kaj počnemo', href: '#what-we-do' },
	{ label: 'Ponudba', href: '#ponudba' },
	{ label: 'Projekti', href: '#projects' },
	{ label: 'Galerija', href: '#gallery' },
	{ label: 'Kariera', href: '#careers' },
];

const SOCIAL = [
	{ label: 'YouTube', href: 'https://youtube.com', Icon: SiYoutube },
	{ label: 'Instagram', href: 'https://instagram.com', Icon: SiInstagram },
	{ label: 'Facebook', href: 'https://facebook.com', Icon: SiFacebook },
];

const Footer = () => {
	return (
		<footer className='kmt-footer' id='contact'>
			<div className='kmt-footer-container'>
				{/* ---------- call to action ---------- */}
				<div className='kmt-footer-cta'>
					<h2 className='kmt-footer-cta-title'>
						Hale, šotori
						<br />
						<em>Vse na enem mestu.</em>
					</h2>

					<a href='mailto:info@kmt.si' className='kmt-footer-cta-btn'>
						Pišite nam
						<ArrowUpRight size={18} strokeWidth={2} />
					</a>
				</div>

				<div className='kmt-footer-rule' />

				{/* ---------- columns ---------- */}
				<div className='kmt-footer-cols'>
					<div className='kmt-footer-brand'>
						<span className='kmt-footer-logo'>Kušermont d.o.o.</span>
						<p className='kmt-footer-blurb'>
							Montaža in prodaja hal, šotorov ter pagod. Petnajst let izkušenj
							na trgih po vsej Evropi.
						</p>
					</div>

					<nav className='kmt-footer-col' aria-label='Noga'>
						<h3 className='kmt-footer-col-h'>Navigacija</h3>
						<ul className='kmt-footer-list'>
							{NAV.map((item) => (
								<li key={item.href}>
									<a href={item.href} className='kmt-footer-link'>
										{item.label}
									</a>
								</li>
							))}
						</ul>
					</nav>

					<div className='kmt-footer-col'>
						<h3 className='kmt-footer-col-h'>Kontakt</h3>
						<ul className='kmt-footer-list'>
							<li>
								<a href='tel:+38640123456' className='kmt-footer-link'>
									<Phone size={15} strokeWidth={1.75} />
									+386 40 123 123
								</a>
							</li>
							<li>
								<a href='mailto:info@kmt.si' className='kmt-footer-link'>
									<Mail size={15} strokeWidth={1.75} />
									info@kusermont.com
								</a>
							</li>
							<li>
								<span className='kmt-footer-link kmt-footer-static'>
									<MapPin size={15} strokeWidth={1.75} />
									Gaji
								</span>
							</li>
						</ul>
					</div>

					<div className='kmt-footer-col'>
						<h3 className='kmt-footer-col-h'>Sledite nam</h3>
						<div className='kmt-footer-social'>
							{SOCIAL.map(({ label, href, Icon }) => (
								<a
									key={label}
									href={href}
									className='kmt-footer-social-link'
									aria-label={label}
									target='_blank'
									rel='noreferrer'
								>
									<Icon size={17} />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* ---------- bottom bar ---------- */}
				<div className='kmt-footer-bottom'>
					<p className='kmt-footer-copy'>
						© {new Date().getFullYear()} Kušer mont d.o.o. Vse pravice
						pridržane.
					</p>

					<ul className='kmt-footer-legal'>
						<li>
							<a href='/zasebnost' className='kmt-footer-link'>
								Zasebnost
							</a>
						</li>
						<li>
							<a href='/pogoji' className='kmt-footer-link'>
								Pogoji poslovanja
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
