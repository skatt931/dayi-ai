export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto h-full w-full max-w-4xl py-10">{children}</div>
  );
}
