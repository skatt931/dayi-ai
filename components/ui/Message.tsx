'use client';

import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Message = () => {
  const [show, setShow] = React.useState(false);
  const t = useTranslations('Support');
  const handleClick = () => {
    setShow(false);
  };

  // show message after 1 minute since user visited and don't show again this day
  React.useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setTimeout(() => {
        setShow(true);
        localStorage.setItem('visited', 'true');
      }, 60000);
    }
  }, []);

  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-2 right-2 z-10 transform transition-all duration-300 ease-in-out',
        `${show ? ' pointer-events-auto scale-100 opacity-100' : 'scale-95 opacity-0'}`,
      )}
    >
      <div
        role="alert"
        className="alert h-auto w-full border-none bg-base-300 text-base-content shadow-lg md:w-[500px]"
      >
        <div>
          <button
            className="accent btn btn-circle btn-outline btn-sm text-base-content"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          <h3 className="pb-2 font-bold">{t('header')}</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <p>
              {t.rich('subheader', {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <p>
              {t.rich('subheader2', {
                b: (chunks) => <b>{chunks}</b>,
              })}
            </p>
            <Link
              className=" underline hover:text-base-content/70"
              href="/uk/about/"
            >
              {t('detailsCTA')}
            </Link>
          </div>
        </div>
        <Link
          href="https://buymeacoffee.com/"
          target="_blank"
          className="btn btn-link btn-sm text-warning hover:text-warning/70"
        >
          {t('supportCTA')}
        </Link>
      </div>
    </div>
  );
};

export default Message;
