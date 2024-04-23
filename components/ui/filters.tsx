'use client';

import { TagsData } from '@/app/[locale]/(main)/page';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const Filters = ({ filtersData }: { filtersData: TagsData[] }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [tagsArray, setTagsArray] = React.useState<string[]>([]);

  function handleChange(isChecked: boolean, title: string) {
    if (isChecked) {
      setTagsArray([...tagsArray, title]);
    }
    if (!isChecked) {
      setTagsArray(tagsArray.filter((tag) => tag !== title));
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (tagsArray.length) {
      params.set('tags', tagsArray.join(','));
    } else {
      params.delete('tags');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [tagsArray]);

  return (
    <>
      {filtersData.map((filter) => (
        <div
          key={filter.id}
          className={cn('form-control mr-5 mt-5 lg:mt-10')}
          role="list"
        >
          <label
            className={
              (cn('label cursor-pointer'),
              'flex items-center justify-start space-x-3')
            }
          >
            <input
              type="checkbox"
              // defaultChecked={searchParams.get('filter') === title}
              className="checkbox checkbox-xs"
              arial-label="ai detection"
              onChange={(e) => handleChange(e.target.checked, filter.name)}
            />
            <div className={cn('label-text', 'cursor-pointer text-sm')}>
              {filter.name}
            </div>
          </label>
        </div>
      ))}
    </>
  );
};

export default Filters;
