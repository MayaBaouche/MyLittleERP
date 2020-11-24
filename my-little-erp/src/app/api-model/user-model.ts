export class User {
  id: string;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  job: number;
  token: string;
}

export const JOBS_TITLES = [
  { id: 0, name: 'Directeur commercial' },
  { id: 1, name: 'Commerciaux' },
  { id: 2, name: 'Personnel administratif' },
  { id: 3, name: 'Chef de projet' },
  { id: 4, name: 'Développeur' },
];
