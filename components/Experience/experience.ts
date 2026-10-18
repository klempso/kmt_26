import {
	Building2,
	Check,
	MessageCircleQuestionMark,
	Ruler,
	RulerDimensionLine,
	Truck,
	Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ExpCard = {
	id: string;
	title: string;
	org: string;
	date: string;
	icon: LucideIcon;
	description: string;
	image?: string;
};

export const EXP_CARDS: ExpCard[] = [
	{
		id: 'exp-1',
		title: 'Svetovanje',
		org: 'KMT d.o.o.',
		date: '2021 — danes',
		icon: MessageCircleQuestionMark,
		description:
			'Vsak uspešen projekt se začne z razumevanjem vaših potreb. Skupaj opredelimo cilje, poiščemo optimalne rešitve in uskladimo ključne zahteve za učinkovito izvedbo projekta.',
		image: '/images/kusermont_svetovanje.png',
	},
	{
		id: 'exp-2',
		title: 'Načrtovanje projekta',
		org: 'Halex Group',
		date: '2018 — 2021',
		icon: RulerDimensionLine,
		description:
			'Ideje pretvorimo v konkreten načrt. Pripravimo tehnične rešitve, načrtujemo jeklene konstrukcije in uskladimo vse ključne podrobnosti, da zagotovimo varno, funkcionalno in ekonomično izvedbo.',
		image: '/images/kusermont_nacrtovanjee.png',
	},
	{
		id: 'exp-3',
		title: 'Montaža objekta',
		org: 'Transkov',
		date: '2015 — 2018',
		icon: Wrench,
		description:
			'Načrt spremenimo v realnost. Poskrbimo za organizacijo transporta, koordinacijo izvajalcev in natančno montažo konstrukcije, pri čemer skrbimo za kakovost, varnost in dogovorjene roke.',
		image: '/images/kusermont_montaza.png',
	},
	{
		id: 'exp-4',
		title: 'Realizacija projekta',
		org: 'KMT d.o.o.',
		date: '2012 — 2015',
		icon: Check,
		description:
			'Rezultat je kakovostno izveden objekt, pripravljen za uporabo. Od jeklenih hal do šotorov in pagod poskrbimo, da se projekt zaključi v skladu z dogovorjenimi zahtevami in pričakovanji naročnika.',
		image: '/images/kusermont_realizacija.png',
	},
];
