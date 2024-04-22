import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import { cn } from '@/lib/utils';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dayi AI',
  description:
    'Додатки та інструменти з використанням штучного інтелекту в наш час стають усе популярнішими. Тому пропонуємо вас сайт з пошуком найкращих іструметів для роботи з AI(ШІ).',
  openGraph: {
    title: 'Dayi AI',
    description:
      'Додатки та інструменти з використанням штучного інтелекту в наш час стають усе популярнішими. Тому пропонуємо вас сайт з пошуком найкращих іструметів для роботи з AI(ШІ).',

    siteName: 'Dayi AI',
    locale: 'uk_UA',
    type: 'website',
  },
  keywords: [
    'AI',
    'ШІ',
    'Штучний інтелект',
    'Український Штучний Інтелект',
    'Artificial Intelegency Ukraine',
  ],
  creator: 'Ihor Kurnytskyi',
  publisher: 'Ihor Kurnytskyi',
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
      <body className={cn(inter.className, 'relative')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <div data-theme>
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
