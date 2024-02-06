import { getMovieList } from '../../api/api';
import Movie from '../../components/Movie';
import styles from '../../styles/home.module.css';

export const metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const movies = await getMovieList();

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
