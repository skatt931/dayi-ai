'use client';

import LikesCounter from '@/components/ui/LikesCounter';
import { useGetDocumentById } from '@/hooks/useGetDocuments';
import { cn } from '@/lib/utils';
import { CATEGORIES, type AiToolData } from '@/types';
import { ExternalLink, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense, useEffect } from 'react';
import { TwitterShareButton } from 'react-share';
import SimilarTools from './components/SimilarTools';

const Tool = ({ params: { toolId } }: { params: { toolId: string } }) => {
  const [aiToolData, setAiToolData] = React.useState<AiToolData | null>(null);
  const t = useTranslations('ToolPage');
  const { getDocById } = useGetDocumentById();

  useEffect(() => {
    getDocById('tools', toolId).then((data: unknown) => {
      setAiToolData(data as AiToolData);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{aiToolData?.title}</title>
        <meta name="description" content={aiToolData?.shortDescription} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={aiToolData?.title} />
        <meta
          property="og:description"
          content={aiToolData?.shortDescription}
        />
        <meta property="og:image" content={aiToolData?.imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@дай[ai]" />
        <meta name="twitter:creator" content="@дай[ai]" />
        <meta name="twitter:title" content={aiToolData?.title} />
        <meta
          name="twitter:description"
          content={aiToolData?.shortDescription}
        />
        <meta name="twitter:image" content={aiToolData?.imageUrl} />
      </Head>
      <div className="to-primary-dark bg-secondary/5 pb-10">
        <div className="bg-current-200 container hero h-auto w-full max-w-full overflow-hidden py-5 md:py-10">
          <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
            <div className="grid w-full max-w-full gap-5 md:grid-cols-2 md:gap-20">
              <div className="place-self-center justify-self-center">
                <Image
                  src={aiToolData?.imageUrl ? aiToolData.imageUrl : ''}
                  width={550}
                  height={550}
                  draggable="false"
                  className="rounded-lg shadow-lg"
                  alt={aiToolData?.title || 'AI Tool'}
                  blurDataURL={aiToolData?.imageUrl}
                  priority={true}
                />
              </div>
              <div className="text-left">
                <h1 className="text-2xl font-bold lg:text-3xl">
                  {aiToolData?.title}
                </h1>
                <p className="text-gray-500">
                  {
                    CATEGORIES[
                      aiToolData?.categories[0] as keyof typeof CATEGORIES
                    ]
                  }
                </p>
                <p className="py-3 text-sm md:py-6 lg:text-base">
                  {aiToolData?.completeDescription ||
                    aiToolData?.shortDescription}
                </p>
                <div className="grid gap-5">
                  <div className="my-3 flex gap-3">
                    <p className="font-bold">{t('tags.price')}</p>
                    <div className="badge badge-primary">
                      {aiToolData?.pricing}
                    </div>
                    <div className="self-end">
                      {/* <LikesCounter
                        likesNumber={aiToolData?.likes}
                        toolId={aiToolData?.docID}
                      /> */}
                      {/* <TwitterShareButton
                        url={location.href}
                        title={aiToolData?.title}
                      >
                        Share
                      </TwitterShareButton> */}
                    </div>
                  </div>
                  {!!aiToolData?.categories && (
                    <div className="md:flex">
                      <p className="mb-3 mr-3 font-bold">
                        {t('tags.categories')}
                      </p>
                      <div className="flex flex-wrap gap-3 md:flex-row">
                        {aiToolData?.categories.map((category) => (
                          <div className="badge badge-secondary" key={category}>
                            {CATEGORIES[category as keyof typeof CATEGORIES]}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="grid gap-2">
                    <Link
                      href={aiToolData?.linkToTool || '#'}
                      className="btn btn-primary"
                    >
                      {t('siteBtn')}
                      <ExternalLink />
                    </Link>
                    <Link
                      href="https://openai.com"
                      className="btn btn-outline btn-secondary"
                    >
                      {t('errorBtn')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-5 py-5">
          <div className="grid gap-5 md:grid-cols-2 md:gap-20">
            <div className="card w-full border">
              <div className="card-body">
                <h2 className="card-title">
                  <span className="rounded-full border-2 border-base-content p-2">
                    <ThumbsUp />
                  </span>
                  <span className="font-semibold">{t('pros')}</span>
                </h2>
                <ul className="list-disc pl-5 font-semibold">
                  {aiToolData?.pros.map((pro) => (
                    <li className="my-5" key={pro}>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="card w-full border">
              <div className="card-body">
                <h2 className="card-title">
                  <span className="rounded-full border-2 border-base-content p-2">
                    <ThumbsDown className="text-base-content" />
                  </span>
                  <span className="font-semibold">{t('cons')}</span>
                </h2>
                <ul className="list-disc pl-5 font-semibold">
                  {aiToolData?.cons.map((con) => (
                    <li className="my-5" key={con}>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto p-5 py-5">
          <div>
            <h2 className="mb-5 text-center text-xl font-semibold">
              {t('similarTools')}
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <SimilarTools
                toolCategory={aiToolData?.categories[0]}
                toolDocumentId={toolId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tool;
