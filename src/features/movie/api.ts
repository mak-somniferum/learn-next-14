import { MOVIE_API_URL } from './consts';

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
