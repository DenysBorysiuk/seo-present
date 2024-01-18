import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

// Фетч поста по id
async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

// Генерація метаданих
export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await fetchData(id);

  return {
    title: post.title,
    description: post.body,
  };
}

// Компонент page
const Post = async ({ params: { id } }: Props) => {
  const post = await fetchData(id);

  return (
    <div>
      <span>{id}</span>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
