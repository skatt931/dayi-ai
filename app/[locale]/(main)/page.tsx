'use client';

// import Cards from '@/components/ui/Card/Cards';
import DialogWindow from '@/components/ui/DialogWindow';
import Filters from '@/components/ui/filters';
import Search from '@/components/ui/search';
import Skeleton from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { Suspense } from 'react';

const Cards = React.lazy(() => import('@/components/ui/Card/Cards'));

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
    <div className="pb-10">
      <div
        className={cn(
          'container hero',
          'w-full max-w-full bg-gradient-to-b from-accent/5 to-secondary/10  py-5',
        )}
      >
        <div className={cn('hero-content text-center', 'w-full')}>
          <div className="w-full max-w-full">
            <h1 className="my-5 text-2xl font-bold lg:text-3xl">
              {t.rich('header', {
                first: (chunks) => <span>{chunks}</span>,
                second: (chunks) => (
                  <span className="text-pink-400">{chunks}</span>
                ),
              })}
            </h1>
            <p className="mb-10 text-sm lg:text-base">{t('subheader')}</p>
            <Search />
            <div className="hidden md:block">
              <Filters />
            </div>
            <section className="sticky top-10 mt-10 bg-base-200 md:hidden">
              <ul className="menu rounded-box bg-base-200 lg:menu-horizontal">
                <li>
                  <a
                    onClick={() =>
                      // @ts-ignore
                      document?.getElementById('my_modal')?.showModal()
                    }
                  >
                    <Filter />
                    Фільтри
                    <span className="badge badge-secondary">
                      {filterQuery ? filterQuery.split(',').length : 0}
                    </span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <section>
        <Suspense
          key={searchQuery + sortParam + filterQuery + pageQuery}
          fallback={
            <div className="container mx-auto grid place-content-between gap-10 px-4 transition-all md:grid-cols-2 md:p-4">
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Skeleton key={id} />
              ))}
            </div>
          }
        >
          <Cards />
        </Suspense>
      </section>
      <DialogWindow />
    </div>
  );
}
