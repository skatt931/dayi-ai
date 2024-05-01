'use client';

import Cards from '@/components/ui/Card/Cards';
import Filters from '@/components/ui/filters';
import Message from '@/components/ui/Message';
import Search from '@/components/ui/search';
import Skeleton from '@/components/ui/Skeleton';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
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
    categories?: string;
    page?: string;
  };
}) {
  const t = useTranslations('Hero');

  const searchQuery = searchParams?.search || '';
  const sortParam = searchParams?.sort || 'new';
  const filterQuery = searchParams?.categories || '';
  const pageQuery = searchParams?.page || '1';

  return (
    <div className="pb-20">
      {/* TODO: Enable later */}
      {/* <Message /> */}
      <div
        className={cn(
          'container hero',
          'h-auto w-full max-w-full overflow-hidden bg-gradient-to-b from-accent/5 to-secondary/10  py-5',
        )}
      >
        <div className={cn('hero-content text-center', 'bg-red w-full')}>
          <div className="w-full max-w-full">
            <h1 className="my-5 text-2xl font-bold lg:text-3xl">
              {/* <span>Відкрий свою суперсилу з Дай</span> [{' '}
              <span className="text-pink-400">AI</span> ] */}
              {t.rich('header', {
                first: (chunks) => <span>{chunks}</span>,
                second: (chunks) => (
                  <span className="text-pink-400">{chunks}</span>
                ),
              })}
            </h1>
            <p className="mb-10 text-sm lg:text-base">{t('subheader')}</p>
            <Search />
            {/* TODO: CHeck mobile version */}
            {/* <section className="hidden justify-items-start md:grid md:grid-cols-6"> */}
            <Filters />
            {/* </section> */}
            <section className="collapse mt-10 bg-base-200 md:hidden">
              <input type="checkbox" aria-label="фільтри" />
              <div className="collapse-title text-xl font-medium">Фільтри</div>
              <div className="collapse-content grid grid-cols-2">
                <Filters />
              </div>
            </section>
          </div>
        </div>
      </div>
      <section>
        <Suspense
          key={searchQuery + sortParam + filterQuery + pageQuery}
          fallback={
            <div className="h-96 w-96">
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Skeleton key={id} />
              ))}
            </div>
          }
        >
          <Cards />
        </Suspense>
      </section>
    </div>
  );
}
