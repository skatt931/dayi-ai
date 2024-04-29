import { cn } from '@/lib/utils';
import { getBlogBySlug } from '@/utils/posts';
import Image from 'next/image';

export default async function Blogs({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const blog = await getBlogBySlug(params.slug);
  return (
    <div className="prose mx-auto">
      <h1 className="my-5 text-4xl font-bold">{blog.frontmatter.title}</h1>
      <div className="my-5 flex items-center">
        {/* <Image
          src={blog.frontmatter.authorAvatar}
          alt={blog.frontmatter.author}
          width={40}
          height={40}
          className="rounded-full"
        /> */}
        <p className="ml-3 text-slate-500">{blog.frontmatter.author}</p>
        <p className="ml-3 text-slate-500">
          {new Date(blog.frontmatter.date).toLocaleDateString()}
        </p>
      </div>
      <Image
        src={blog.frontmatter.image}
        alt={blog.frontmatter.title}
        width={600}
        height={600}
        objectFit="cover"
        className="mt-5 w-full rounded-lg"
      />

      <article
        className={cn(
          'prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white',
        )}
      >
        {blog.content}
      </article>
    </div>
  );
}
