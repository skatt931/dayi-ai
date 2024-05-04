'use client';

import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import navigation from '../../nav-links.json';

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="dropdown dropdown-bottom lg:hidden">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost rounded-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu />
      </div>
      <ul
        tabIndex={0}
        className={cn(
          'menu dropdown-content z-[1] mt-2 w-52 rounded-box bg-base-100 p-2 shadow',
          `${isOpen ? 'block' : 'hidden'}`,
        )}
      >
        {navigation.map((item) => (
          <li key={item.title}>
            <Link
              href={`/uk/${item.linkUrl}`}
              className="h-full w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
