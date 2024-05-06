import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';

const contentDir = path.join(process.cwd(), './pages/blog');
const aboutContentDir = path.join(process.cwd(), './pages/uk/about');

export async function getBlogBySlug(
  slug: string,
  dir: 'pages' | 'about' = 'pages',
) {
  const fileName = slug + '.mdx';
  const contentPath = dir === 'pages' ? contentDir : aboutContentDir;
  const filePath = path.join(contentPath, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { frontmatter, content } = await compileMDX<{
    title: string;
    author: string;
    date: string;
    description: string;
    authorAvatar: string;
    image: string;
    keywords: string[];
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    content: content,
    slug: path.parse(fileName).name,
    fileContent,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name)),
  );
  return blogs;
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
