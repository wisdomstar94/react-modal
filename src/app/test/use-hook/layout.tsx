import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'react-modal test use-hook',
  description: 'react-modal test use-hook',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>{children}</>
  );
}
