export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  isbn?: string[];
  cover_i?: number;
  edition_count?: number;
  publish_year?: number[];
}

export interface OpenLibraryResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
}
