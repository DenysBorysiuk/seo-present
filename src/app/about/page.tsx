import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About page description',
};

export default function About() {
  return (
    <div>
      <h1>About page</h1>
    </div>
  );
}
