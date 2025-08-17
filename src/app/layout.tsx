
import { Nanum_Myeongjo } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nanum = Nanum_Myeongjo({
   variable: '--font-nanum',
   weight: '400',
   subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/hero-bg/1.webp" />
        <link rel="preload" as="image" href="/hero-bg/2.webp" />
        <link rel="preload" as="image" href="/hero-bg/3.webp" />
        <link rel="preload" as="image" href="/hero-bg/4.webp" />
      </head>
      <body className={`${nanum.variable} antialiased relative scroll-smooth`}>
        <Navbar />
        <main className='mt-16 min-h-screen bg-slate-900 text-white min-w-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
