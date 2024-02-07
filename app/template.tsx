import { Navigation } from '@/widgets';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
