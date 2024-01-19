// import type { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'About',
//   description: 'About page description',
// };

export default function About() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center my-[24px] text-[36px] font-medium">About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, fugit! Quaerat, quidem
        voluptatum. Vel quae doloribus cum non, suscipit saepe minus ea necessitatibus voluptas, ut
        repellendus assumenda dolor autem ullam?
      </p>
    </div>
  );
}
