'use client';

import Card from '@/components/ui/card';
import Filters from '@/components/ui/filters';
import Search from '@/components/ui/search';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
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

export default function Home() {
  const t = useTranslations();
  const theme = useTheme();

  return (
    <div data-theme={theme.theme} className="pb-20">
      <div className="hero h-auto bg-base-100 pt-5 w-full max-w-full overflow-hidden container mb-10">
        <div className="hero-content text-center">
          <div className="max-w-full w-full">
            <h1 className="text-2xl lg:text-3xl font-bold mb-5 lg:mb-3">
              Відкрий свою суперсилу з DayiAI знайшовши найкращі інструменти AI
            </h1>
            <p className="lg:py-6 text-sm lg:text-base mb-5 lg:mb-3">
              Найкращий сервіс для пошуку AI інструментів, які допоможуть вам у
              вашій роботі
            </p>
            <Search />
            <div className="hidden md:grid md:grid-cols-5 justify-items-start">
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
      <div className="grid gap-10 px-10 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      {t('components.navigation.title')}
      <Link href="/uk"> Change to ua </Link>
    </div>
  );
}
