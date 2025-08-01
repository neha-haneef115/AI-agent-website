import type { Metadata } from "next";
import { Manrope, Questrial } from "next/font/google";

import "./globals.css";


const manrope = Manrope({
  subsets: ['latin'],
  weight: ['200','400', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});
const questrial = Questrial({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-questrial',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${questrial.variable}`}>
      <body className="font-manrope">{children}</body>
    </html>
  );
}
