import Link from 'next/link';

type Post = {
  id: string;
  title: string;
};

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div className="container mx-auto">
      <h1>Home page</h1>
      {posts.map(({ id, title }: Post) => (
        <li key={id}>
          <Link href={`/post/${id}`}>
            Post {id} : {title}
          </Link>
        </li>
      ))}
    </div>
  );
}
