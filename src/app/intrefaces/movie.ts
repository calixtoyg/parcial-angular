export interface Movie {
  id?: string;
  title: string;
  genre: string[];
  releaseDate: string;
  image?: string;
  audience: number;
  actors: string[];
}
