import { cn } from '@/lib/utils';
import { ExternalLink, ThumbsDown, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tool = () => {
  return (
    <div className="pb-20 from-secondary/10 to-primary-dark bg-gradient-to-r">
      <div
        className={cn(
          'hero h-auto bg-current-200 py-10 w-full max-w-full overflow-hidden container',
        )}
      >
        <div className={cn('hero-content text-center', 'w-full lg:px-0')}>
          <div className="max-w-full w-full grid md:grid-cols-2 gap-20">
            <div className="justify-self-center place-self-center">
              <Image
                src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                width={384}
                height={384}
                className="rounded-lg shadow-lg"
                alt="Chat GPT tool image"
              />
            </div>
            <div className="text-left">
              <h1 className="text-2xl lg:text-3xl font-bold">Chat GPT</h1>
              <p className="text-gray-500">Generative ai</p>
              <p className="lg:py-6 text-sm lg:text-base">
                HitPaw Edimakor (Video Editor) is an AI-powered video editing
                software designed to cater to both amateur and professional
                editors. It simplifies the editing process with features like
                auto subtitle maker, video cutting, text overlays, video
                coloring, and speed adjustments, alongside AI-driven tools such
                as speech-to-text and noise removal. Users can enhance their
                videos with a plethora of stickers, filters, effects, and audio
                options, making it suitable for creating content for social
                media platforms like YouTube and TikTok. People might want to
                use HitPaw Edimakor for its user-friendly interface, time-saving
                AI features, and the ability to produce high-quality videos with
                minimal effort.
              </p>
              <div className="grid gap-5">
                <div className="flex gap-3">
                  <p className="font-bold">Pricing: </p>
                  <div className="badge badge-primary">Free</div>
                </div>
                <div className="flex gap-3">
                  <p className="font-bold">Tags: </p>
                  <div className="badge badge-secondary">Made in UA</div>
                </div>
                <div className="grid gap-2">
                  <Link
                    href="https://openai.com"
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
        <div className="grid md:grid-cols-2 gap-20">
          <div className="bg-zinc-400/30 rounded-md p-5">
            <div className="flex justify-center gap-5 pb-10">
              <ThumbsUp className="text-green-600" />
              <span>Переваги</span>
            </div>
            <div>
              <ul>
                <li>Повільний</li>
                <li>Не піключений до інтернету</li>
              </ul>
            </div>
          </div>
          <div className="bg-zinc-400/30 rounded-md p-5">
            <div className="flex justify-center gap-5 text-center pb-10">
              <ThumbsDown className="text-red-600" />
              <span>Недоліки</span>
            </div>
            <div>
              <ul>
                <li>Повільний</li>
                <li>Не піключений до інтернету</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
