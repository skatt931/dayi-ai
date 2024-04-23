import { getBlogBySlug } from '@/utils/posts';

export default async function Blogs({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog = await getBlogBySlug(params.slug);
  return <div className="container mx-auto h-full w-full">{blog.content}</div>;
}
