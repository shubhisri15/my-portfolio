
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
      <body className={`${nanum.variable} antialiased relative`}>
        <Navbar />
        <main className='px-12 mt-24 min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
