import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Artemis",
  description:
    "An alternative to the popular Reddit app Apollo, built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
