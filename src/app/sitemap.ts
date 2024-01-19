import { MetadataRoute } from 'next';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'http://localhost';

  const posts = await fetchData();

  const homeUrl = {
    url: baseUrl,
    lastModified: new Date(),
  };

  const aboutUrl = {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
  };

  const postUrls = posts.map(({ id }: { id: string }) => {
    return {
      url: `${baseUrl}/post/${id}`,
      lastModified: new Date(),
    };
  });

  return [homeUrl, aboutUrl, ...postUrls];
}
