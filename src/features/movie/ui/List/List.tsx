import Link from 'next/link';
import { getMovieList } from '../../api';
import styles from './list.module.css';

export default async function List() {
  const movies = await getMovieList();

  return (
    <ul role="list" className={styles.container}>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link prefetch href={`/movie/${movie.id}`} className={styles.movie}>
            <img src={movie.poster_path} alt={movie.title} />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
