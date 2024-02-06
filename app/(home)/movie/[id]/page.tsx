import { Suspense } from 'react';
import MovieVideos from '../../../../components/MovieVideos';
import MovieInfo from '../../../../components/MovieInfo';
import { getMovieById } from '../../../../api/api';

interface IParams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovieById(id);

  return {
    title: movie.title,
    description: 'Movie Detail Page',
  };
}

export default function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<div>Description Loading...</div>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<div>Videos Loading...</div>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
