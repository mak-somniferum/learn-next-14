import Link from 'next/link';
import { getMovieById } from '../../api';
import styles from './description.module.css';

export default async function Description({ id }: { id: string }) {
  const movie = await getMovieById(id);

  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <Link href={movie.homepage} target="_blank">
          Homepage &rarr;
        </Link>
      </div>
    </div>
  );
}
