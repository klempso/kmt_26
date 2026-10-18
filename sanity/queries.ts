import { groq } from 'next-sanity';

export const ponudbaQuery = groq`
	*[_type == "ponudba"][0]{
		heading,
		items[]{
			_key,
			title,
			text,
			icon,
			image{ ..., alt }
		}
	}
`;
