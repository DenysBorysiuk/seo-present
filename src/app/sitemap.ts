type Post = {
  id: string;
};

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function sitemap() {
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

  const serviceUrls = posts.map(({ id }: Post) => {
    return {
      url: `${baseUrl}/post/${id}`,
      lastModified: new Date(),
    };
  });

  return [homeUrl, aboutUrl, ...serviceUrls];
}
