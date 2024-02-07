import { Suspense } from 'react';
import { Movie } from '@/features/movie';

export const metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <Suspense fallback={<h2>List Loading...</h2>}>
      <Movie.List />
    </Suspense>
  );
}
