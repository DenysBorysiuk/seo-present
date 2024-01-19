import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  params: { id: string };
};

// Фетч поста по id
async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await fetchData(id);

  return {
    title: `Post ${id}`,
    description: post.body,
    alternates: {
      canonical: `/post/${post.id}`,
    },
  };
}

// Компонент page
const Post = async ({ params: { id } }: Props) => {
  const post = await fetchData(id);

  return (
    <div className="container mx-auto">
      <Link href="/">Back</Link>
      <h1>Post {id}</h1>
      <h2 className="font-medium text-center text-[24px]">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
