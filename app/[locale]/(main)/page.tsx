import DialogWindow from '@/components/ui/DialogWindow';
import Filters from '@/components/ui/filters';
import MobileFilter from '@/components/ui/MobileFilter';
import Search from '@/components/ui/search';
import { cn } from '@/lib/utils';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Cards = React.lazy(() => import('@/components/ui/Card/Cards'));

export type TagsData = {
  id: number;
  tag: string;
  name: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    sort?: string;
    categories?: string;
    page?: string;
  };
}) {
  const t = await getTranslations('Hero');

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
              <MobileFilter filterQuery={filterQuery} />
            </section>
          </div>
        </div>
      </div>
      <section>
        <Cards />
      </section>
      <DialogWindow />
    </div>
  );
}
