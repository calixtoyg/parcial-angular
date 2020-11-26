export interface Actor {
  id?: string;
  name: string;
  lastname: string;
  sex: 'M' | 'F';
  birthDate: string;
  country: string;
  picture?: string;
}
