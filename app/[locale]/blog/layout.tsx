export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="w-full bg-accent/5 p-5">{children}</main>;
}
