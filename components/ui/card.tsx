import { cn } from '@/lib/utils';
import { ExternalLink, Link2, LinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LikesCounter from './likes-counter';

type CardProps = {
  id?: number;
  title: string;
  shortDescription: string;
  imageUrl: string;
  tags: string[];
  pricing: string;
  specialTags: string[];
  likes?: number;
  createdAt: string;
  linkToTool: string;
};

const Card = ({ aiTools }: { aiTools: CardProps[] }) => {
  const stopPropagation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <>
      {aiTools.map(
        ({
          id,
          title,
          shortDescription,
          imageUrl,
          tags,
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
                {specialTags &&
                  specialTags.map((tag) => (
                    <div
                      key={tag}
                      className={cn('badge badge-primary', 'text-xs')}
                    >
                      {specialTags}
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
                  {tags &&
                    tags.map((tag) => (
                      <div key={tag} className="badge badge-outline">
                        {tag}
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
    </>
  );
};

export default Card;
