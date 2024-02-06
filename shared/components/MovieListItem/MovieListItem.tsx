'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './movie-list-item.module.css';

interface MovieProps {
  id: string;
  title: string;
  posterPath: string;
}

export default function MovieListItem({ id, title, posterPath }: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={posterPath} alt={title} onClick={onClick} />
      <Link prefetch href={`/movie/${id}`}>
        {title}
      </Link>
    </div>
  );
}
