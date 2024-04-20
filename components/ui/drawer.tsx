import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import navigation from '../../nav-links.json';

const Drawer = () => {
  return (
    <div className="drawer px-2">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <Menu />
        </label>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {navigation.map((item) => (
            <li key={item.title}>
              <Link href={`uk/${item.linkUrl}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
