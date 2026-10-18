import { type SchemaTypeDefinition } from 'sanity';
import { ponudba, ponudbaItem } from '../schemas/ponudba';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [ponudba, ponudbaItem],
};
