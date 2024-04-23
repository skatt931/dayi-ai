'use client';

import { TagsData } from '@/app/[locale]/(main)/page';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const filtersData = [
  {
    id: 1,
    tag: 'AI_DETECTION',
    name: 'AI Detection',
  },
  {
    id: 2,
    tag: 'AI_GENERATION',
    name: 'Image Processing',
  },
  {
    id: 3,
    tag: 'AI_OPTIMIZATION',
    name: 'Natural Language',
  },
  {
    id: 4,
    tag: 'AI_TRAINING',
    name: 'Speech Recognition',
  },
  {
    id: 5,
    tag: 'AI_VISUALIZATION',
    name: 'Text Recognition',
  },
  {
    id: 6,
    tag: 'AI_OTHER',
    name: 'Video Processing',
  },
  {
    id: 7,
    tag: 'voice-recognition',
    name: 'Voice Recognition',
  },
  {
    id: 8,
    tag: 'voice-synthesis',
    name: 'Voice Synthesis',
  },
  {
    id: 9,
    tag: 'other',
    name: 'Other',
  },
  {
    id: 10,
    tag: 'all',
    name: 'All',
  },
  {
    id: 11,
    tag: 'ai-detection',
    name: 'AI Detection',
  },
];

const Filters = () => {
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
    const params = new URLSearchParams(searchParams || '');
    if (tagsArray.length) {
      params.set('categories', tagsArray.join(','));
    } else {
      params.delete('categories');
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
              onChange={(e) => handleChange(e.target.checked, filter.tag)}
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
