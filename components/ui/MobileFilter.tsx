'use client';

import { Filter } from 'lucide-react';
import React from 'react';

const MobileFilter = ({ filterQuery }: { filterQuery: string | undefined }) => {
  return (
    <ul className="menu rounded-box bg-base-200 lg:menu-horizontal">
      <li>
        <a
          onClick={() =>
            // @ts-ignore
            document?.getElementById('my_modal')?.showModal()
          }
        >
          <Filter />
          Фільтри
          <span className="badge badge-secondary">
            {filterQuery ? filterQuery.split(',').length : 0}
          </span>
        </a>
      </li>
    </ul>
  );
};

export default MobileFilter;
