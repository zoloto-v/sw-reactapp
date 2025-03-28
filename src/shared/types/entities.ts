type TGender = "male" | "female" | "hermaphrodite" | "n/a";

export interface ICharacter {
  name: string;
  height: string; 
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: TGender;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};

export interface IResponseList<T> {
  count: number | null;
  next: string | null;
  previous: string | null;
  results: Array<T>;
};