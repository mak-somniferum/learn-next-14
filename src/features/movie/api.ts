import { MOVIE_API_URL } from './consts';

export async function getMovieList() {
  const response = await fetch(MOVIE_API_URL);
  const movieList = await response.json();

  return movieList;
}

export async function getMovieById(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}`);
  const movieDetailInfo = await response.json();

  return movieDetailInfo;
}

export async function getVideosOfMovie(id: string) {
  const response = await fetch(`${MOVIE_API_URL}/${id}/videos`);
  const vidoesOfMovie = await response.json();

  return vidoesOfMovie;
}
