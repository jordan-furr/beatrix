import type { Metadata } from "next";
import "../globals.css";


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
        {children}
      </body>
    </html>
  );
}
