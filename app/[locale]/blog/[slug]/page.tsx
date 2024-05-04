import { cn } from '@/lib/utils';
import { getBlogBySlug } from '@/utils/posts';
import { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug);
  return {
    title: blog.frontmatter.title,
    description: blog.frontmatter.description,
    applicationName: 'Дай[ ai ] - Блог',
    authors: {
      name: blog.frontmatter.author,
    },
    keywords: blog.frontmatter.keywords,
    openGraph: {
      title: blog.frontmatter.title,
      description: blog.frontmatter.description,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dai_ai',
      creator: '@dai_ai',
      description: blog.frontmatter.description,
      title: blog.frontmatter.title,
      images: [blog.frontmatter.image],
    },
  };
}

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-blue-300">
      {props.children}
    </h1>
  ),
};

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
      <div className="my-5 flex items-center gap-4">
        <p className=" text-slate-500">{blog.frontmatter.author}</p>
        <p className="text-sm text-slate-500">
          {new Date(blog.frontmatter.date).toLocaleString('uk-UA', {
            dateStyle: 'full',
          })}
        </p>
      </div>
      <Image
        src={blog.frontmatter.image}
        alt={blog.frontmatter.title}
        width={600}
        height={600}
        className="mt-5 w-full rounded-lg"
        priority={true}
      />
      <article
        className={cn(
          'prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg',
        )}
      >
        {blog.content}
      </article>
    </div>
  );
}
