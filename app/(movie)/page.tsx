import { Movie } from '@/features/movie';

export const metadata = {
  title: 'Home',
};

export default function HomePage() {
  return <Movie.List />;
}
