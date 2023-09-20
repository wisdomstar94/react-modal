import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-modal test use-component',
  description: 'react-modal test use-component',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
