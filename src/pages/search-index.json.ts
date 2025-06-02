import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';   // ⬅️ content collections を使っている場合

export const GET: APIRoute = async () => {
  // blog コレクションの frontmatter を取得（Markdown や MDX のみならこれで OK）
  const posts = await getCollection('blog');

  const index = posts.map(({ id, slug, data }) => ({
    id,
    slug,                       // `/blog/◯◯/` など
    title: data.title,
    description: data.excerpt ?? '',
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
