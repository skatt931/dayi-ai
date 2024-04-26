import { useGetDocuments } from '@/hooks/useGetDocuments';
import { cn, searchFilterTools, sortTools } from '@/lib/utils';
import { AiToolData, CATEGORIES } from '@/types';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import LikesCounter from './likes-counter';

const Card = () => {
  const [aiTools, setAiTools] = useState<AiToolData[]>([]);
  const [filteredTools, setFilteredTools] = useState<AiToolData[]>(aiTools);
  const { getDoc } = useGetDocuments();
  const searchParams = useSearchParams();

  const searchQuery = searchParams?.get('search') || '';
  const sortQuery = searchParams?.get('sort') || '';
  const filterQuery = searchParams?.get('categories') || '';

  useEffect(() => {
    getDoc('tools', 0, 100).then((data: unknown) => {
      setAiTools(data as AiToolData[]);
    });
  }, []);

  useEffect(() => {
    if (sortQuery) {
      setFilteredTools(sortTools(sortQuery, aiTools));
    }
    // Search based on title, shortDescription, categories, spaceTags
    if (searchQuery || filterQuery) {
      // TODO: redo this part in more readable way
      setFilteredTools(
        sortTools(
          sortQuery,
          searchFilterTools(searchQuery, aiTools).filter((tool) =>
            filterQuery
              .split(',')
              .some((category) => tool.categories.includes(category)),
          ),
        ),
      );
    }

    if (!searchQuery && !sortQuery && !filterQuery) {
      setFilteredTools(aiTools);
    }
  }, [sortQuery, searchQuery, filterQuery, aiTools]);

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
          Знайдено {filteredTools.length} з {aiTools.length} інструментів
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
            docID,
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
            <Link href={`/uk/${docID}`} key={id}>
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
                  {!!specialTags &&
                    specialTags.map((tag) => (
                      <div
                        key={tag}
                        className={cn('badge badge-primary', 'text-xs')}
                      >
                        {tag}
                      </div>
                    ))}
                  <p
                    className={cn(
                      'h-10 overflow-hidden overflow-ellipsis text-sm',
                      'text-xs',
                    )}
                  >
                    {shortDescription}
                  </p>
                  <div className={(cn('card-actions'), 'flex justify-between')}>
                    {!!categories &&
                      categories.map((tag) => (
                        <div key={tag} className="badge badge-outline text-xs">
                          {CATEGORIES[tag as keyof typeof CATEGORIES]}
                        </div>
                      ))}
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
