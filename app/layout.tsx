import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Montserrat, Oswald } from '@next/font/google'
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: "remote1",
  description: "Get remote job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${montserrat.variable} ${oswald.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
