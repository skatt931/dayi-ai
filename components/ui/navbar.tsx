import Drawer from '@/components/ui/Drawer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import navigation from '../../nav-links.json';
import ThemeController from './ThemeController';

const Navbar = () => {
  return (
    <div
      className={cn(
        'bg-base-100',
        'sticky top-0 z-10 border-b border-base-300/30 text-base-content lg:relative',
      )}
    >
      <div className={cn('navbar bg-base-100', 'container mx-auto')}>
        <div className="navbar-start">
          <div className="lg:hidden">
            <Drawer />
          </div>
          <Link href={`/uk/`} className="btn btn-ghost text-xl">
            <span>Дай</span>[<span className="text-pink-400">AI</span>]
          </Link>
        </div>
        <nav className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navigation.map((navItem) => (
              <li key={navItem.title}>
                <Link href={`/uk/${navItem.linkUrl}`}>{navItem.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="navbar-end">
          <ThemeController />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
