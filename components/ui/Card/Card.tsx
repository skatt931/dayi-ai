import { cn } from '@/lib/utils';
import { AiToolData, CATEGORIES } from '@/types';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LikesCounter from '../LikesCounter';

const Card: React.FC<AiToolData> = ({
  docID,
  id,
  title,
  shortDescription,
  imageUrl,
  promoted,
  categories,
  pricing,
  specialTags,
  likes,
  linkToTool,
}) => {
  const stopPropagation = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
  return (
    <Link href={`/uk/${docID}`} key={id}>
      <div
        className={cn(
          'card card-side card-compact w-full bg-base-100 shadow-xl',
          `to-primary-dark m-auto h-48 max-w-80 bg-accent/5 transition-all hover:h-[101%] hover:w-[101%] hover:-translate-y-1 hover:shadow-[0_0_15px_theme(colors.violet.200),0_0_15px_theme(colors.violet.600)] lg:min-h-48 lg:min-w-96 lg:max-w-none lg:p-0 ${promoted && 'shadow-[0_0_15px_theme(colors.blue.200),0_0_15px_theme(colors.blue.600)]'}`,
        )}
      >
        <figure className="w-2/6 lg:w-5/12">
          <Image
            src={imageUrl}
            width={384}
            height={384}
            draggable="false"
            className="h-full w-full object-cover"
            alt="Shoes"
          />
        </figure>
        <div className="card-body	w-4/6 lg:w-7/12">
          <div className={cn('card-title', 'lg:text:l flex gap-2 text-base')}>
            <h2>{title}</h2>{' '}
            <a
              role="button"
              href={linkToTool}
              target="_blank"
              onClick={(e) => {
                stopPropagation(e);
              }}
            >
              <ExternalLink className="w-4 transition-all hover:-translate-y-1" />
            </a>
          </div>
          {promoted && (
            <div className={cn('badge badge-success', 'text-xs')}>
              Спонсоровано
            </div>
          )}
          {/* 
          TODO: Add special tags or remove this
          {!!specialTags &&
            specialTags.map((tag) => (
              <div key={tag} className={cn('badge badge-success', 'text-xs')}>
                {tag}
              </div>
            ))} */}
          <p
            className={cn(
              'h-10 overflow-hidden overflow-ellipsis text-sm',
              'text-xs',
            )}
          >
            {shortDescription}
          </p>
          <div className={(cn('card-actions'), 'flex justify-between')}>
            <div className={cn('badge badge-primary', 'text-xs text-black')}>
              {pricing}
            </div>
            <LikesCounter likesNumber={likes} toolId={docID} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
