'use client';

import Card from '@/components/ui/card';
import Filters from '@/components/ui/filters';
import Search from '@/components/ui/search';
import Skeleton from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { Suspense } from 'react';

export type TagsData = {
  id: number;
  tag: string;
  name: string;
};

export default function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    sort?: string;
  };
}) {
  // const t = useTranslations(); // TODO: add translations
  const { theme } = useTheme();

  const searchQuery = searchParams?.search || '';
  const sortParam = searchParams?.sort || 'new';

  return (
    <div className="pb-20">
      <div
        className={cn(
          'container hero h-auto w-full max-w-full overflow-hidden bg-neutral-content py-10',
          `${theme === 'dim' ? 'bg-base-200' : 'bg-neutral-content'}`,
        )}
      >
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="w-full max-w-full">
            <h1 className="my-5 text-2xl font-bold lg:text-3xl">
              Відкрий свою суперсилу з DayiAI знайшовши найкращі інструменти AI
            </h1>
            <p className="mb-10 text-sm lg:py-6 lg:text-base">
              Оптимізуйте свій робочий процес за допомогою нашого списку
              інструментів штучного інтелекту - знайдіть своє ідеальне рішення!
            </p>
            <Search />
            <div className="hidden justify-items-start md:grid md:grid-cols-6">
              <Filters />
            </div>
            <div className="collapse mt-10 bg-base-200 md:hidden">
              <input type="checkbox" aria-label="фільтри" />
              <div className="collapse-title text-xl font-medium">Фільтри</div>
              <div className="collapse-content grid grid-cols-2">
                <Filters />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Suspense
          key={searchQuery + sortParam}
          fallback={
            <div className="h-96 w-96">
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Skeleton key={id} />
              ))}
            </div>
          }
        >
          <Card searchQuery={searchQuery} sortParam={sortParam} />
        </Suspense>
      </div>
    </div>
  );
}
