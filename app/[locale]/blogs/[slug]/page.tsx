import { getBlogBySlug } from '@/utils/posts';

export default async function Blogs({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog = await getBlogBySlug(params.slug);
  return <div className="w-full h-full container mx-auto">{blog.content}</div>;
}
