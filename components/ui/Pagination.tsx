import { DOTS, PAGE_SIZE } from '@/constants';
import { usePagination } from '@/hooks/usePagination';
import { cn } from '@/lib/utils';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type PaginationProps = {
  totalCount: number;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = ({ totalCount, currentPage }) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePageClick = (page: string | number) => {
    const params = new URLSearchParams(searchParams || '');
    if (page) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize: PAGE_SIZE,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  return (
    <div className="join">
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <button key={pageNumber} className="btn btn-disabled join-item">
                ...
              </button>
            );
          }

          // Render our Page Pills
          return (
            <button
              key={pageNumber}
              className={cn(
                'btn join-item',
                `${currentPage === pageNumber ? 'btn-active' : ''}`,
              )}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
    </div>
  );
};

export default Pagination;
