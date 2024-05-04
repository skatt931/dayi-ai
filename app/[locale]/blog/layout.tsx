export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full bg-secondary/5 p-5">{children}</div>;
}
