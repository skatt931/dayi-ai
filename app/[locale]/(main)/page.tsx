'use client';

import Card from '@/components/ui/card';
import Filters from '@/components/ui/filters';
import Search from '@/components/ui/search';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import data from '../../../mocks/mocked-ai-tools.json';

const filtersData = [
  {
    id: 1,
    name: 'AI Detection',
  },
  {
    id: 2,
    name: 'Image Processing',
  },
  {
    id: 3,
    name: 'Natural Language Processing',
  },
  {
    id: 4,
    name: 'Speech Recognition',
  },
  {
    id: 5,
    name: 'Text Recognition',
  },
  {
    id: 6,
    name: 'Video Processing',
  },
  {
    id: 7,
    name: 'Voice Recognition',
  },
  {
    id: 8,
    name: 'Voice Synthesis',
  },
  {
    id: 9,
    name: 'Other',
  },
  {
    id: 10,
    name: 'All',
  },
  {
    id: 11,
    name: 'AI Detection',
  },
];
export const dynamic = 'force-dynamic';
export default function Home() {
  // const t = useTranslations(); // TODO: add translations
  const theme = useTheme();

  const searchParams = useSearchParams();
  const sortParam = searchParams.get('sort');
  const [aiTools, setAiTools] = useState(data);

  useEffect(() => {
    // TODO: fix sorting
    if (sortParam === 'new') {
      setAiTools(data.sort((a, b) => a.id - b.id));
    } else if (sortParam === 'popular') {
      setAiTools(data.sort((a, b) => b.likes - a.likes));
    } else if (sortParam === 'az') {
      setAiTools(data.sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sortParam === 'za') {
      setAiTools(data.sort((a, b) => b.title.localeCompare(a.title)));
    }
    // else if (sortParam === 'new-old') {
    //   setAiTools(data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
    // } else if (sortParam === 'old-new') {
    //   setAiTools(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    // }
  }, [sortParam]);

  return (
    <div data-theme={theme.theme} className="pb-20">
      <div className="hero h-auto bg-base-100 pt-5 w-full max-w-full overflow-hidden container mb-10">
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="max-w-full w-full">
            <h1 className="text-2xl lg:text-3xl font-bold mt-10 mb-5">
              Відкрий свою суперсилу з DayiAI знайшовши найкращі інструменти AI
            </h1>
            <p className="lg:py-6 text-sm lg:text-base mb-10">
              Найкращий сервіс для пошуку AI інструментів, які допоможуть вам у
              вашій роботі
            </p>
            <Search />
            <div className="hidden md:grid md:grid-cols-7 justify-items-start">
              {filtersData.map((filter) => (
                <Filters key={filter.id} title={filter.name} />
              ))}
            </div>
            <div className="collapse bg-base-200 md:hidden mt-10">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">Фільтри</div>
              <div className="collapse-content grid grid-cols-2">
                {filtersData.map((filter) => (
                  <Filters key={filter.id} title={filter.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-10 px-10 lg:px-0 lg:grid-cols-2 container mx-auto place-content-between">
        {aiTools.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
