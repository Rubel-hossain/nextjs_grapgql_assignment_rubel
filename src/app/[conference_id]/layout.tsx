export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-6">
      <div className="max-w-[1320px] w-full mx-auto">{children}</div>
    </div>
  );
}
