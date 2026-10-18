import { defineField, defineType } from 'sanity';

export const ponudbaItem = defineType({
	name: 'ponudbaItem',
	title: 'Postavka ponudbe',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Naslov',
			type: 'string',
			validation: (Rule) => Rule.required().max(60),
		}),
		defineField({
			name: 'text',
			title: 'Opis',
			type: 'text',
			rows: 4,
			validation: (Rule) => Rule.required().max(400),
		}),
		defineField({
			name: 'image',
			title: 'Slika',
			type: 'image',
			options: { hotspot: true },
			fields: [
				defineField({
					name: 'alt',
					title: 'Alt besedilo',
					type: 'string',
				}),
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'icon',
			title: 'Ikona',
			type: 'string',
			options: {
				list: [
					{ title: 'Hala', value: 'Warehouse' },
					{ title: 'Šotor', value: 'Tent' },
					{ title: 'Pagoda', value: 'Home' },
					{ title: 'Montaža', value: 'Wrench' },
					{ title: 'Transport', value: 'Truck' },
					{ title: 'Načrtovanje', value: 'Ruler' },
				],
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: { title: 'title', subtitle: 'text', media: 'image' },
	},
});

export const ponudba = defineType({
	name: 'ponudba',
	title: 'Ponudba',
	type: 'document',
	fields: [
		defineField({
			name: 'heading',
			title: 'Naslov sekcije',
			type: 'string',
		}),
		defineField({
			name: 'items',
			title: 'Postavke',
			type: 'array',
			of: [{ type: 'ponudbaItem' }],
			validation: (Rule) => Rule.required().min(1).max(6),
		}),
	],
});
