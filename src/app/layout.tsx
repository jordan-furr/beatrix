import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";


export const metadata: Metadata = {
  title: "Beatrix Furr",
  description: "Beatrix Furr's writing from Bread school in Rouen, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
