import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn('mx-auto h-full w-full max-w-4xl py-10', 'text-red')}>
      {children}
    </div>
  );
}
