export const bookFilterableFields = [
  'search',
  'title',
  'author',
  'publicationDate',
  'genre',
  'category',
  'minPrice',
  'maxPrice'
];

export const bookSearchableFields = [
  'title',
  'author',
  'publicationDate',
  'genre',
  'categoryId',
];

export const bookRelationalFields: string[] = ['category'];
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  category: 'category',
};
