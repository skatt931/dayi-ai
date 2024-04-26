'use client';

import { useGetDocumentById } from '@/hooks/useGetDocuments';
import { cn } from '@/lib/utils';
import { type AiToolData } from '@/types';
import { ExternalLink, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Tool = ({ params: { toolId } }: { params: { toolId: string } }) => {
  const [aiToolData, setAiToolData] = React.useState<AiToolData | null>(null);
  const { getDocById } = useGetDocumentById();

  useEffect(() => {
    getDocById('tools', toolId).then((data: unknown) =>
      setAiToolData(data as AiToolData),
    );
  }, []);

  return (
    <div className="to-primary-dark bg-gradient-to-r from-secondary/10 pb-20">
      <div
        className={cn(
          'bg-current-200 container hero h-auto w-full max-w-full overflow-hidden py-10',
        )}
      >
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="grid w-full max-w-full gap-20 md:grid-cols-2">
            <div className="place-self-center justify-self-center">
              <Image
                src={aiToolData?.imageUrl}
                width={384}
                height={384}
                className="rounded-lg shadow-lg"
                alt="Chat GPT tool image"
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold lg:text-3xl">
                {aiToolData?.title}
              </h1>
              <p className="text-gray-500">{aiToolData?.categories}</p>
              <p className="text-sm lg:py-6 lg:text-base">
                {aiToolData?.completeDescription ||
                  aiToolData?.shortDescription}
              </p>
              <div className="grid gap-5">
                <div className="flex gap-3">
                  <p className="font-bold">Pricing: </p>
                  <div className="badge badge-primary">
                    {aiToolData?.pricing}
                  </div>
                </div>
                {!!aiToolData?.categories && (
                  <div className="flex gap-3">
                    <p className="font-bold">Tags: </p>
                    <div className="badge badge-secondary">
                      {aiToolData?.categories}
                    </div>
                  </div>
                )}
                <div className="grid gap-2">
                  <Link
                    href={aiToolData?.linkToTool || '#'}
                    className="btn btn-outline btn-primary"
                  >
                    Visit site
                    <ExternalLink />
                  </Link>
                  <Link
                    href="https://openai.com"
                    className="btn btn-outline btn-secondary"
                  >
                    Inform about changes
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-5">
        <div className="grid gap-20 md:grid-cols-2">
          <div className="rounded-md bg-zinc-400/30 p-5">
            <div className="flex justify-center gap-5 pb-10">
              <ThumbsUp className="text-green-600" />
              <span>Переваги</span>
            </div>
            <div>
              <ul>{aiToolData?.pros.map((pro) => <li key={pro}>{pro}</li>)}</ul>
            </div>
          </div>
          <div className="rounded-md bg-zinc-400/30 p-5">
            <div className="flex justify-center gap-5 pb-10 text-center">
              <ThumbsDown className="text-red-600" />
              <span>Недоліки</span>
            </div>
            <div>
              <ul>{aiToolData?.cons.map((con) => <li key={con}>{con}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
