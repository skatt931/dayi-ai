import { PAGE_SIZE } from '@/constants';
import { AiToolContext } from '@/context/aiToolContext';
import { filterByCategory, searchFilterTools, sortTools } from '@/lib/utils';
import { AiToolData } from '@/types';
import { useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Card from './Card';

const Cards = () => {
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

    toolsPerPage = tools.slice(
      (parseInt(pageQuery) - 1) * PAGE_SIZE,
      parseInt(pageQuery) * PAGE_SIZE,
    );
    setToolsPerPage(toolsPerPage);
    setFilteredTools(tools);
  }, [sortQuery, searchQuery, filterQuery, aiTools, pageQuery]);

  return (
    <>
      <div className="container mx-auto py-5 ">
        <p className="text-center font-bold md:text-left">
          Знайдено {filteredTools.length} з {aiTools.length} інструментів
        </p>
      </div>
      {filteredTools.length === 0 && (
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold">Нічого не знайдено</h2>
          <p className="text-lg">Спробуйте змінити параметри пошуку</p>
        </div>
      )}
      <div className="container mx-auto grid place-content-between gap-10 px-10 transition-all md:grid-cols-2 md:px-0">
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
