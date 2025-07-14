
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
