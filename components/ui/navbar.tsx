'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import React from 'react';
import navigation from '../../nav-links.json';
import Drawer from './drawer';
import ThemeController from './theme-controller';

const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      className="navbar bg-base-100 sticky top-0 z-10 lg:relative"
      data-theme={theme}
    >
      <div className="navbar-start">
        <div className="lg:hidden">
          <Drawer />
        </div>
        <a className="btn btn-ghost text-xl">
          <span>Dayi</span>[<span className="text-pink-300">AI</span>]
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((navItem) => (
            <li key={navItem.title}>
              <Link href={navItem.linkUrl}>{navItem.title}</Link>
            </li>
          ))}

          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 z-10">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
