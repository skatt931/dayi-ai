'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
            placeholder="Шукати з понад 500+ інструментів AI"
            aria-label="Знайди свій інструмент AI"
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
        aria-label="Сортувати інструменти AI"
      >
        <option value="sort" disabled>
          Сортувати
        </option>
        <option value="new">Нові</option>
        <option value="popular">Популярні</option>
        <option value="az">За назвою (А-Я)</option>
        <option value="za">За назвою (Я-А)</option>
        <option value="new-old">За датою додавання (нові-старі)</option>
        <option value="old-new">За датою додавання (старі-нові)</option>
      </select>
      {/* <div className="indicator">
        <span className="indicator-item badge badge-secondary">new</span>
        <button className="btn join-item">Search</button>
      </div> */}
    </section>
  );
};

export default Search;
