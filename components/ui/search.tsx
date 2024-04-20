'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    router.push(pathname + '?' + createQueryString('sort', e.target.value));
  };

  return (
    <div className="join w-full max-w-full flex">
      <div className="basis-2/3 w-2/3">
        <div>
          <input
            className="input input-bordered w-full join-item"
            placeholder="Знайди свій інструмент AI"
          />
        </div>
      </div>
      <select
        className={cn('select select-bordered join-item', 'basis-1/3 w-1/3')}
        onChange={(e) => handleChange(e)}
      >
        <option disabled selected>
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
    </div>
  );
};

export default Search;
