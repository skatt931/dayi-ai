import { BlogCard } from '@/components/ui/BlogCard';
import { getBlogs } from '@/utils/posts';
import Image from 'next/image';
import Link from 'next/link';

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex items-center space-x-2">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);

export default async function Blogs() {
  const blogs = await getBlogs();
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="my-5 text-center text-3xl font-bold ">
        Блог про Штучний Інтелект
      </h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {blogs.map((blog) => {
          const slug = blog.slug;
          return (
            <Link key={slug} href={`blog/${slug}`} className="cursor-default">
              <div className="mx-auto w-80">
                <BlogCard
                  title={
                    <TitleComponent
                      title={blog.frontmatter.author}
                      avatar={blog.frontmatter?.authorAvatar}
                    />
                  }
                >
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
                    <div className="aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10 relative w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
                      <Image
                        src={blog.frontmatter.image}
                        alt="thumbnail"
                        layout="fill"
                        objectFit="cover"
                        className={`transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl `}
                      />
                    </div>
                    <div className=" p-4">
                      <h2 className="my-4 text-lg font-bold text-zinc-700">
                        {blog.frontmatter.title}
                      </h2>
                      <h2 className="my-4 text-sm font-normal text-zinc-500">
                        {blog.frontmatter.description}
                      </h2>
                      <div className="mt-10 flex flex-row items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {new Date(blog.frontmatter.date).toLocaleDateString()}
                        </span>
                        <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                          Read More
                        </div>
                      </div>
                    </div>
                  </div>
                </BlogCard>
              </div>
            </Link>
            // <article
            //   key={blog.slug}
            //   className="card w-96 bg-base-100 shadow-xl image-full"
            // >
            //   <figure>
            //     <img
            //       src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            //       alt="Shoes"
            //     />
            //   </figure>
            //   <div className="card-body">
            //     <h2 className="card-title">{blog.frontmatter.title}</h2>
            //     <p>{blog.frontmatter.author}</p>
            //     <div className="card-actions justify-end">
            //       <Link href={`blog/${blog.slug}`} className="btn btn-primary">
            //         Read More
            //       </Link>
            //     </div>
            //   </div>
            // </article>
            // <article key={blog.slug} className="grid grid-cols-4 text-3xl">
            //   <h1>{blog.frontmatter.title}</h1>
            //   <p>{blog.frontmatter.author}</p>
            //   <p>{blog.frontmatter.publishDate}</p>
            //   <Link href={`blog/${blog.slug}`}>Read More</Link>
            // </article>
          );
        })}
      </div>
    </div>
  );
}
