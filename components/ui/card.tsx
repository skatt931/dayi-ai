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

const Card = ({
  id,
  title,
  shortDescription,
  imageUrl = 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  tags,
  likes = 0,
  pricing,
  specialTags,
  linkToTool,
}: CardProps) => {
  return (
    <div
      className={cn(
        'card w-full bg-base-100 shadow-xl card-side card-compact',
        'm-auto lg:min-h-60 lg:min-w-96 h-52 max-w-80 lg:max-w-none',
      )}
    >
      <figure className="w-2/6 lg:w-5/12">
        <Link href={`/uk/${title}`}>
          <Image
            src={imageUrl}
            width={384}
            height={384}
            className="object-cover w-full h-full"
            alt="Shoes"
          />
        </Link>
      </figure>
      <div className="card-body	w-4/6 lg:w-7/12">
        <Link
          href={`/uk/${title}`}
          passHref={true}
          target="_blank"
          className={cn('card-title', 'text-base lg:text:l flex gap-2 group')}
        >
          <h2>{title}</h2>{' '}
          <ExternalLink className="w-4 group-hover:-translate-y-1 transition-all" />
        </Link>
        {specialTags &&
          specialTags.map((tag) => (
            <div key={tag} className={cn('badge badge-primary', 'text-xs')}>
              {specialTags}
            </div>
          ))}

        <p
          className={cn(
            'text-sm h-10 overflow-ellipsis overflow-hidden',
            'text-xs',
          )}
        >
          <Link href={linkToTool} passHref={true}>
            {shortDescription}
          </Link>
        </p>
        <div className={(cn('card-actions'), 'flex justify-between')}>
          {/* {tags &&
            tags.map((tag) => (
              <div key={tag} className="badge badge-outline">
                {tag}
              </div>
            ))} */}
          <div className={cn('badge badge-ghost min-h-fit', 'text-xs')}>
            {pricing}
          </div>
          <LikesCounter likesNumber={likes} toolId={id} />
        </div>
      </div>
    </div>
  );
};

export default Card;
