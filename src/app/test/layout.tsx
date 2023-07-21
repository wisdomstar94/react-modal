import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-modal test',
  description: 'react-modal test',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
