export type User = {
  id: number;
  name: string;
  email: string;
};

export async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = (await res.json()) as User[];
  return users;
}

export const MOVIE_API_URL =
  'https://nomad-movies.nomadcoders.workers.dev/movies';

export async function getMovieList() {
  const response = await fetch(MOVIE_API_URL);
  const json = await response.json();
  return json;
}

export async function getMovieById(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}`);
  const json = await response.json();
  return json;
}

export async function getVideosOfMovie(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}/videos`);
  const json = await response.json();
  return json;
}
