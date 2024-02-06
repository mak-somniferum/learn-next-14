import { getMovieList } from '@/api/api';
import { MovieListItem } from '@/shared/components';
import styles from './movie.module.css';

export const metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const movies = await getMovieList();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
