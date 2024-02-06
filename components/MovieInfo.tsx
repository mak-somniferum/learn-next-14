import Link from 'next/link';
import { getMovieById } from '../api/api';
import potato from '../styles/movie-info.module.css';

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieById(id);

  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={potato.poster}
      />
      <div>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p className={potato.info}>{movie.overview}</p>
        <Link href={movie.homepage} target="_blank">
          Homepage &rarr;
        </Link>
      </div>
    </div>
  );
}
