import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenUI - AI-Powered Application",
  description:
    "An AI-powered application that can answer queries and fetch data from various sources",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        {children}
      </body>
    </html>
  );
}
