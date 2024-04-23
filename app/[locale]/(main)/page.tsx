'use client';

import Card from '@/components/ui/card';
import Filters from '@/components/ui/filters';
import Search from '@/components/ui/search';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import data from '../../../mocks/mocked-ai-tools.json';

export type TagsData = {
  id: number;
  tag: string;
  name: string;
};

const filtersData = [
  {
    id: 1,
    tag: 'ai-detection',
    name: 'AI Detection',
  },
  {
    id: 2,
    tag: 'image-processing',
    name: 'Image Processing',
  },
  {
    id: 3,
    tag: 'natural-language-processing',
    name: 'Natural Language',
  },
  {
    id: 4,
    tag: 'speech-recognition',
    name: 'Speech Recognition',
  },
  {
    id: 5,
    tag: 'text-recognition',
    name: 'Text Recognition',
  },
  {
    id: 6,
    tag: 'video-processing',
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
  console.log('sortParam: ', sortParam);

  const [aiTools, setAiTools] = useState(data);

  useEffect(() => {
    // TODO: fix sorting
    if (sortParam === 'new') {
      setAiTools(data.sort((a, b) => a.id - b.id));
    } else if (sortParam === 'popular') {
      setAiTools(data.sort((a, b) => b.likes - a.likes));
    }
    // else if (sortParam === 'az') {
    //   setAiTools(data.sort((a, b) => a.title.localeCompare(b.title)));
    // } else if (sortParam === 'za') {
    //   setAiTools(data.sort((a, b) => b.title.localeCompare(a.title)));
    // }
    // else if (sortParam === 'new-old') {
    //   setAiTools(
    //     data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
    //   );
    // } else if (sortParam === 'old-new') {
    //   setAiTools(
    //     data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    //   );
    // }
    console.log('aiTools: ', aiTools);
  }, [sortParam, aiTools]);

  return (
    <div className="pb-20">
      <div
        className={cn(
          'hero h-auto bg-neutral-content py-10 w-full max-w-full overflow-hidden container',
          `${theme === 'dim' ? 'bg-base-200' : 'bg-neutral-content'}`,
        )}
      >
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="max-w-full w-full">
            <h1 className="text-2xl lg:text-3xl font-bold my-5">
              Відкрий свою суперсилу з DayiAI знайшовши найкращі інструменти AI
            </h1>
            <p className="lg:py-6 text-sm lg:text-base mb-10">
              Оптимізуйте свій робочий процес за допомогою нашого списку
              інструментів штучного інтелекту - знайдіть своє ідеальне рішення!
            </p>
            <Search />
            <div className="hidden md:grid md:grid-cols-6 justify-items-start">
              <Filters filtersData={filtersData} />
            </div>
            <div className="collapse bg-base-200 md:hidden mt-10">
              <input type="checkbox" aria-label="фільтри" />
              <div className="collapse-title text-xl font-medium">Фільтри</div>
              <div className="collapse-content grid grid-cols-2">
                <Filters filtersData={filtersData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5 ">
        <p className="font-bold text-center md:text-left">
          Знайдено {data.length} з {aiTools.length} інструментів
        </p>
      </div>
      <div className="grid gap-10 px-10 lg:px-0 lg:grid-cols-2 container mx-auto place-content-between">
        <Card aiTools={aiTools} />
      </div>
    </div>
  );
}
