'use client';

import { categoryKeys, categoryValues, cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const Filters = () => {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleChange(isChecked: boolean, title: string) {
    const params = new URLSearchParams(searchParams || '');
    params.set('page', '1');
    if (isChecked) {
      if (params.has('categories')) {
        const categories = params.getAll('categories');
        categories.push(title);
        params.set('categories', categories.join(','));
      } else {
        params.set('categories', title);
      }
    }
    if (!isChecked) {
      if (params.has('categories')) {
        let categories = params.getAll('categories')[0].split(',');
        const index = categories.indexOf(title);
        if (index > -1) {
          categories.splice(index, 1);
          params.delete('categories');
          if (categories.length > 0) {
            params.append('categories', categories.join(','));
          }
        }
      }
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <form
      ref={formRef}
      className="hidden justify-items-start md:grid md:grid-cols-6"
    >
      {categoryValues.map((filter) => (
        <div
          key={filter}
          className={cn('form-control mr-5 mt-5 lg:mt-5')}
          role="list"
        >
          <label
            key={filter}
            className={
              (cn('label mr-3 mt-3 cursor-pointer'),
              'flex items-center justify-start space-x-2')
            }
          >
            <input
              type="checkbox"
              name="categories"
              defaultChecked={searchParams
                ?.get('categories')
                ?.includes(categoryKeys[categoryValues.indexOf(filter as any)])}
              value={categoryKeys[categoryValues.indexOf(filter as any)]}
              className="checkbox checkbox-xs"
              arial-label="ai detection"
              onChange={(e) =>
                handleChange(
                  e.target.checked,
                  categoryKeys[categoryValues.indexOf(filter as any)],
                )
              }
            />

            <div className={cn('label-text', 'cursor-pointer text-xs')}>
              {filter.replace(/_/g, ' ')}
            </div>
          </label>
        </div>
      ))}
    </form>
  );
};

export default Filters;
