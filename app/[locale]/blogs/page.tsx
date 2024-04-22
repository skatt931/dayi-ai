import { getBlogs } from '@/lib/posts';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="pb-20">
      {blogs.map((blog) => {
        return (
          <article key={blog.slug} className="grid grid-cols-4 text-3xl">
            <h1>{blog.frontmatter.title}</h1>
            <p>{blog.frontmatter.author}</p>
            <p>{blog.frontmatter.publishDate}</p>
            <Link href={`blogs/${blog.slug}`}>Read More</Link>
          </article>
        );
      })}
    </div>
  );
}
