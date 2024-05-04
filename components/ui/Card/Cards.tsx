import { PAGE_SIZE } from '@/constants';
import { AiToolContext } from '@/context/aiToolContext';
import {
  filterByCategory,
  searchFilterTools,
  sortTools,
  sortToolsByPromoted,
} from '@/lib/utils';
import { AiToolData } from '@/types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Card from './Card';

const Cards = () => {
  const t = useTranslations('Card');
  const aiTools = useContext(AiToolContext);
  const [filteredTools, setFilteredTools] = useState<AiToolData[]>(aiTools);
  const [toolsPerPage, setToolsPerPage] = useState<AiToolData[]>(aiTools);
  const searchParams = useSearchParams();

  const searchQuery = searchParams?.get('search') || '';
  const sortQuery = searchParams?.get('sort') || '';
  const filterQuery = searchParams?.get('categories') || '';
  const pageQuery = searchParams?.get('page') || '1';

  useEffect(() => {
    let tools = aiTools;
    let toolsPerPage = aiTools;

    tools = searchFilterTools(searchQuery, tools);
    tools = filterByCategory(filterQuery, tools);
    tools = sortTools(sortQuery, tools);
    tools = sortToolsByPromoted(tools);

    toolsPerPage = tools.slice(
      (parseInt(pageQuery) - 1) * PAGE_SIZE,
      parseInt(pageQuery) * PAGE_SIZE,
    );
    setToolsPerPage(toolsPerPage);
    setFilteredTools(tools);
  }, [sortQuery, searchQuery, filterQuery, aiTools, pageQuery]);

  return (
    <>
      <div className="container mx-auto p-4">
        <p className="text-center font-bold md:text-left">
          {t('shownTools', { from: filteredTools.length, to: aiTools.length })}
        </p>
      </div>
      {filteredTools.length === 0 && (
        <div className="grid grid-cols-1 justify-center gap-5 px-5 text-center">
          <h2 className="text-2xl font-bold">{t('notFound.header')}</h2>
          <p className="text-lg">{t('notFound.subheader')}</p>
          <Image
            alt="No tools found"
            width={300}
            height={300}
            src="/assets/notFound/noTools.png"
            className="self-center justify-self-center"
          />
        </div>
      )}
      <div className="container mx-auto grid place-content-between gap-10 px-4 transition-all md:grid-cols-2 md:p-4">
        {toolsPerPage.map((tool) => (
          <Card key={tool.id} {...tool} />
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <Pagination
          totalCount={filteredTools.length}
          currentPage={parseInt(pageQuery)}
        />
      </div>
    </>
  );
};

export default Cards;
