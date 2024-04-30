'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('Hero');

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams || '');
    if (term) {
      params.set('search', term);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  function handleSortChange(sortParam: string) {
    const params = new URLSearchParams(searchParams || '');
    if (sortParam) {
      params.set('sort', sortParam);
    } else {
      params.delete('sort');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <section className="join flex w-full max-w-full">
      <div className="w-2/3 basis-2/3">
        <div>
          <input
            className="input join-item input-bordered w-full"
            placeholder={t('search.placeholder')}
            aria-label={t('search.ariaLabel')}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            defaultValue={searchParams?.get('search')?.toString()}
          />
        </div>
      </div>
      <select
        className={cn('join-item select select-bordered', 'w-1/3 basis-1/3')}
        onChange={(e) => handleSortChange(e.target.value)}
        defaultValue={searchParams?.get('sort')?.toString() || 'sort'}
        aria-label={t('sort.ariaLabel')}
      >
        <option value="sort" disabled>
          {t('sort.options.default')}
        </option>
        <option value="new">{t('sort.options.new')}</option>
        <option value="popular">{t('sort.options.popularity')}</option>
        <option value="az">{t('sort.options.az')}</option>
        <option value="za">{t('sort.options.za')}</option>
        <option value="new-old">{t('sort.options.newOld')}</option>
        <option value="old-new">{t('sort.options.oldNew')}</option>
      </select>
    </section>
  );
};

export default Search;
