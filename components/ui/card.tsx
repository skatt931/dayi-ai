import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import LikesCounter from './likes-counter';

type CardProps = {
  id: number;
  createdAt: Date;
  promoted: boolean;
  pros: string[];
  cons: string[];
  categories: string;
  specialTags: string;
  title: string;
  shortDescription: string;
  completeDescription?: string;
  imageUrl: string;
  pricing: string;
  linkToTool: string;
  likes: number;
};

const Card = ({
  searchQuery,
  sortParam,
}: {
  searchQuery: string;
  sortParam: string;
}) => {
  const [aiTools, setAiTools] = useState<CardProps[]>([]);
  const [filteredTools, setFilteredTools] = useState<CardProps[]>(aiTools);
  useEffect(() => {
    fetch('/api/getAiTools')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setAiTools(data.aiTools);
      });
  }, []);

  useEffect(() => {
    // TODO: fix sorting
    if (sortParam === 'new') {
      setFilteredTools(aiTools.sort((a, b) => a.id - b.id));
    } else if (sortParam === 'popular') {
      setFilteredTools(aiTools.sort((a, b) => b.likes - a.likes));
    } else if (sortParam === 'az') {
      setFilteredTools(aiTools.sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sortParam === 'za') {
      setFilteredTools(aiTools.sort((a, b) => b.title.localeCompare(a.title)));
    } else if (sortParam === 'new-old') {
      setAiTools(
        aiTools.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
      );
    } else if (sortParam === 'old-new') {
      setAiTools(
        aiTools.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
      );
    }
    console.log('aiTools: ', aiTools);
  }, [sortParam, aiTools]);

  const stopPropagation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <>
      <div className="container mx-auto py-5 ">
        <p className="text-center font-bold md:text-left">
          Знайдено {aiTools.length} з {filteredTools.length} інструментів
        </p>
      </div>
      {filteredTools.length === 0 && (
        <div className="text-center w-full">
          <h2 className="text-2xl font-bold">Нічого не знайдено</h2>
          <p className="text-lg">Спробуйте змінити параметри пошуку</p>
        </div>
      )}
      <div className="container mx-auto grid place-content-between gap-10 px-10 lg:grid-cols-2 lg:px-0 transition-all">
        {filteredTools.map(
          ({
            id,
            title,
            shortDescription,
            imageUrl,
            categories,
            pricing,
            specialTags,
            likes,
            linkToTool,
          }) => (
            <Link href={`/uk/${title}`} key={id}>
              <div
                className={cn(
                  'card card-side card-compact w-full bg-base-100 shadow-xl',
                  'to-primary-dark m-auto h-48 max-w-80 bg-gradient-to-r from-secondary/10  hover:shadow-sm md:hover:shadow-2xl lg:min-h-48 lg:min-w-96 lg:max-w-none lg:p-0',
                )}
              >
                <figure className="w-2/6 lg:w-5/12">
                  <Image
                    src={imageUrl}
                    width={384}
                    height={384}
                    className="h-full w-full object-cover"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body	w-4/6 lg:w-7/12">
                  <a
                    role="button"
                    href={linkToTool}
                    target="_blank"
                    className={cn(
                      'card-title',
                      'lg:text:l group flex gap-2 text-base',
                    )}
                    onClick={(e) => {
                      stopPropagation(e);
                    }}
                  >
                    <h2>{title}</h2>{' '}
                    <ExternalLink className="w-4 transition-all group-hover:-translate-y-1" />
                  </a>
                  {specialTags && (
                    <div className={cn('badge badge-primary', 'text-xs')}>
                      {specialTags}
                    </div>
                  )}

                  <p
                    className={cn(
                      'h-10 overflow-hidden overflow-ellipsis text-sm',
                      'text-xs',
                    )}
                  >
                    {shortDescription}
                  </p>
                  <div className={(cn('card-actions'), 'flex justify-between')}>
                    <div className="badge badge-outline">{categories}</div>
                    {/* <div className={cn('badge badge-ghost min-h-fit', 'text-xs')}>
                    {pricing}
                  </div> */}
                    <LikesCounter likesNumber={likes} toolId={id} />
                  </div>
                </div>
              </div>
            </Link>
          ),
        )}
      </div>
    </>
  );
};

export default Card;
