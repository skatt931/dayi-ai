import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const Message = () => {
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(false);
  };

  return (
    <div
      className={cn('fixed right-2 top-2 z-10', `${show ? 'block' : 'hidden'}`)}
    >
      <div
        role="alert"
        className="alert relative h-auto w-[500px] border-none bg-accent text-accent-content shadow-lg"
      >
        <div>
          <button
            className="accent btn btn-circle btn-outline btn-sm text-accent-content"
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
          <h3 className="pb-2 font-bold">Нам потрібна ваша підтримка!</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            <p>
              Цей проект може існувати лише завдяки <b>вам</b>.
            </p>
            <p>
              Підтримайте проект на <b>buy me a coffee</b> ☕️
            </p>
            <Link
              className="text-accent-content underline hover:text-accent-content/70"
              href="/uk/about/"
            >
              Деталі за посиланням
            </Link>
          </div>
        </div>
        <Link
          href="https://buymeacoffee.com/"
          target="_blank"
          className="btn btn-link btn-sm text-warning hover:text-warning/70"
        >
          Підтримати
        </Link>
      </div>
    </div>
  );
};

export default Message;
