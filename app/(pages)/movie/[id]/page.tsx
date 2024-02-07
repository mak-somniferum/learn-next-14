import { Suspense } from 'react';
import { Movie, getMovieById } from '@/features/movie';

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovieById(id);

  return {
    title: movie.title,
    description: 'Movie Detail Page',
  };
}

export default function MovieDetailPage({ params: { id } }: Params) {
  return (
    <>
      <Suspense fallback={<h2>Information Loading...</h2>}>
        <Movie.DetailInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Videos Loading...</h2>}>
        <Movie.Videos id={id} />
      </Suspense>
    </>
  );
}
