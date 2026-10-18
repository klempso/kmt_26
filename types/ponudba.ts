import type { Image } from 'sanity';

export type PonudbaItem = {
	_key: string;
	title: string;
	text: string;
	image: string;
	icon: string;
};

export type Ponudba = {
	heading?: string;
	items: PonudbaItem[];
};
