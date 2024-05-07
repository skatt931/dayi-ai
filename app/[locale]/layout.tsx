import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';
import Message from '@/components/ui/Message';
import Navbar from '@/components/ui/navbar';
import { AiToolProvider } from '@/context/aiToolContext';
import GoogleAnalytics from '@/GoogleAnalytics';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Дай [ ai ]',
  description:
    'Додатки та інструменти з використанням штучного інтелекту в наш час стають усе популярнішими. Тому пропонуємо вас сайт з пошуком найкращих іструметів для роботи з AI(ШІ).',
  openGraph: {
    title: 'Дай [ ai ]',
    description:
      'Додатки та інструменти з використанням штучного інтелекту в наш час стають усе популярнішими. Тому пропонуємо вас сайт з пошуком найкращих іструметів для роботи з AI(ШІ).',
    siteName: 'Дай [ ai ]',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/main-page.webp',
      },
    ],
  },
  keywords: [
    'Агрегатор ШІ',
    'Агрегатор Інструментів штучного інтелекту',
    'Агрегатор AI',
    'Колекція Інструментів штучного інтелекту',
    'База даних AI',
    'Список AI',
    'Каталог AI',
    'Пошук AI',
    'Інструменти Штучного Інтелекту',
    'Інструменти ШІ',
    'Інструменти AI',
    'AI tools',
    'Штучний інтелект',
    'Блог AI',
    'AI',
    'ШІ',
    'Український Штучний Інтелект',
    'Штучний Інтелект України',
    'Artificial Intelegency Ukraine',
  ],
  creator: 'Ihor Kurnytskyi',
  publisher: 'Ihor Kurnytskyi',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Receive messages provided in `i18n.ts`
  const messages = useMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GoogleAnalytics />
      <body className={cn(inter.className, 'relative')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <AiToolProvider>
              <Navbar />
              <main data-theme>
                <Message />
                {children}
              </main>
              <Footer />
            </AiToolProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
