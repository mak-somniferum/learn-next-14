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
      <Movie.DetailInfo id={id} />
      <Movie.Videos id={id} />
    </>
  );
}
