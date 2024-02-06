import Navigation from '../../components/Navigation';
import QueryClientProvider from '../../components/QueryClientProvider';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider>
      <Navigation />
      {children}
    </QueryClientProvider>
  );
}
