
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
        <title>Shubhi&apos;s portfolio</title>
        <meta name="description" content="This is the portfolio website of Shubhi Srivastava." />
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
