'use client';

import Link from 'next/link';
import styles from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface MovieProps {
  id: string;
  title: string;
  posterPath: string;
}

export default function Movie({ id, title, posterPath }: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={posterPath} alt={title} onClick={onClick} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
