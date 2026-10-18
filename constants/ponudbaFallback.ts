import type { Ponudba } from '@/types/ponudba';

export const PONUDBA_FALLBACK: Ponudba = {
	heading: 'Naša ponudba',
	items: [
		{
			_key: 'fallback-1',
			title: 'Montažne hale',
			text: 'Načrtovanje in postavitev montažnih hal po meri, primernih za industrijo, skladiščenje in kmetijstvo. Konstrukcije izdelujemo po evropskih standardih.',
			icon: 'Warehouse',
			image: '/images/hale-one.JPG',
		},
		{
			_key: 'fallback-2',
			title: 'Šotori in pagode',
			text: 'Najem in prodaja šotorov vseh velikosti — od manjših vrtnih prireditev do velikih sejemskih postavitev.',
			icon: 'Tent',
			image: '/images/banner-3-mod.jpg',
		},
		{
			_key: 'fallback-3',
			title: 'Montaža in prodaja',
			text: 'Elegantne pagode za promocijske dogodke, poroke in sejme. Hitra montaža in široka izbira dimenzij.',
			icon: 'Wrench',
			image: '/images/podjetje.jpg',
		},
		{
			_key: 'fallback-4',
			title: 'Strokovno svetovanje',
			text: 'Poskrbimo za celoten proces — od dostave in postavitve do demontaže po zaključku dogodka.',
			icon: 'UserCheck',
			image: '/images/avstrija-1-mod.jpg',
		},
	],
};
