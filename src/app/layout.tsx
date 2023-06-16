import "@/styles/globals.css";

export const metadata = {
  title: "Artemis",
  description:
    "An alternative to the popular Reddit app Apollo, built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
