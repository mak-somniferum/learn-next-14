import { Movie, getMovieById } from '@/features/movie';
import { Tabs } from '@/shared';

interface Params {
  params: {
    id: string;
  };
}

const tabs = ['Credits', 'Videos', 'Providers', 'Similar'];

export async function generateMetadata({ params: { id } }: Params) {
  const movie = await getMovieById(id);

  return {
    title: movie.title,
    description: 'Movie Detail Page',
  };
}

export default function MovieDetailPage({ params: { id } }: Params) {
  const tabContents = [<Movie.Videos id={id} />];

  return (
    <>
      <Movie.Description id={id} />
      <Tabs tabs={tabs} contents={tabContents} />
    </>
  );
}
