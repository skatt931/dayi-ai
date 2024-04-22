'use client';

import { useTheme } from 'next-themes';

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className="w-full">
      {children}
    </div>
  );
}
