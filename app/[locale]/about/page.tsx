import { getBlogBySlug } from '@/utils/posts';
import React from 'react';

export default async function Blogs() {
  const aboutPage = await getBlogBySlug('about', 'about');
  return (
    <div className="container py-10">
      <div className="prose mx-auto prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
        {aboutPage.content}
      </div>
    </div>
  );
}
