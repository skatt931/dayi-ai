import { getBlogs } from '@/utils/posts';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';

export default async function Blogs() {
  const blogs = await getBlogs();
  const t = await getTranslations('Blog');

  return (
    <div className="container mx-auto px-4 pb-20 pt-10">
      <h1 className="mb-10 text-center text-3xl font-bold ">{t('header')}</h1>
      <div className="mx-auto flex flex-wrap justify-around">
        {blogs.map((blog) => {
          const slug = blog.slug;
          return (
            <Link
              key={slug}
              href={`blog/${slug}`}
              className="card w-96 border-base-300/50 bg-base-200 text-base-content transition-all hover:shadow-[0_0_15px_theme(colors.violet.200),0_0_15px_theme(colors.violet.500)]"
            >
              <figure className="w-full">
                <Image
                  src={blog.frontmatter.image}
                  alt="car!"
                  width={400}
                  height={400}
                  draggable="false"
                  priority={false}
                />
              </figure>
              <div className="card-body min-h-72 gap-5">
                <h2 className="card-title">{blog.frontmatter.title}</h2>
                <p>{blog.frontmatter.description}</p>
                <div className="card-actions justify-between">
                  <p className="self-center text-sm font-light text-gray-400">
                    {new Date(blog.frontmatter.date).toLocaleString('uk-UA', {
                      dateStyle: 'full',
                    })}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
