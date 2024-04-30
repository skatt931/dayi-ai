'use client';

import { useGetDocumentById } from '@/hooks/useGetDocuments';
import { cn } from '@/lib/utils';
import { CATEGORIES, type AiToolData } from '@/types';
import { ExternalLink, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import SimilarTools from './components/SimilarTools';

const Tool = ({ params: { toolId } }: { params: { toolId: string } }) => {
  const [aiToolData, setAiToolData] = React.useState<AiToolData | null>(null);
  const { getDocById } = useGetDocumentById();

  useEffect(() => {
    getDocById('tools', toolId).then((data: unknown) =>
      setAiToolData(data as AiToolData),
    );
  }, []);

  return (
    <div className="to-primary-dark bg-gradient-to-r from-secondary/10 pb-10">
      <div className="bg-current-200 container hero h-auto w-full max-w-full overflow-hidden py-5 md:py-10">
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="grid w-full max-w-full gap-5 md:grid-cols-2 md:gap-20">
            <div className="place-self-center justify-self-center">
              <Image
                src={aiToolData?.imageUrl ? aiToolData.imageUrl : ''}
                width={550}
                height={550}
                className="rounded-lg shadow-lg"
                alt="Chat GPT tool image"
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
                  <p className="font-bold">Ціна: </p>
                  <div className="badge badge-primary">
                    {aiToolData?.pricing}
                  </div>
                </div>
                {!!aiToolData?.categories && (
                  <div className="md:flex">
                    <p className="mb-3 mr-3 font-bold">Категорії: </p>
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
                    className="btn btn-outline btn-primary"
                  >
                    Відвідати сайт
                    <ExternalLink />
                  </Link>
                  <Link
                    href="https://openai.com"
                    className="btn btn-outline btn-secondary"
                  >
                    Сповістити про помилку
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-5 py-5">
        <div className="grid gap-5 md:grid-cols-2 md:gap-20">
          <div className="rounded-md bg-zinc-200/10 p-5 shadow-[0_0_10px_theme('colors.blue.200')_,0_0_10px_theme('colors.blue.700')]">
            <div className="flex justify-center gap-5 pb-5">
              <ThumbsUp className="text-green-600" />
              <span className="font-semibold">Переваги</span>
            </div>
            <div>
              <ul className="list-disc pl-5 font-semibold">
                {aiToolData?.pros.map((pro) => (
                  <li className="my-5" key={pro}>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="rounded-md bg-zinc-200/10 p-5  shadow-[0_0_10px_theme('colors.blue.200')_,0_0_10px_theme('colors.blue.700')]">
            <div className="flex justify-center gap-5 pb-5 text-center">
              <ThumbsDown className="text-red-600" />
              <span className="font-semibold">Недоліки</span>
            </div>
            <div>
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
            Схожі інструменти:
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
  );
};

export default Tool;
