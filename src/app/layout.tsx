import type { Metadata, Viewport } from 'next';
import { Josefin_Sans, Source_Sans_3 } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import StructuredData from '../components/StructuredData';

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-josefin-sans',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '600', '700'],
  variable: '--font-source-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://daffarafi.com'),
  title: 'Daffa Rafi',
  description:
    "Hi! My name is Muhammad Daffa'I Rafi Prasetyo, 22 years old. I'm a Web Developer and Designer, based in Jakarta, Indonesia.",
  keywords: [
    'Daffa Rafi',
    'Web Developer',
    'Designer',
    'Jakarta',
    'Indonesia',
    'Portfolio',
    'Frontend Developer',
  ],
  authors: [{ name: "Muhammad Daffa'I Rafi Prasetyo" }],
  creator: 'Daffa Rafi',
  publisher: 'Daffa Rafi',
  robots: 'index, follow',
  openGraph: {
    title: 'Daffa Rafi - Web Developer & Designer',
    description:
      "Hi! My name is Muhammad Daffa'I Rafi Prasetyo, 22 years old. I'm a Web Developer and Designer, based in Jakarta, Indonesia.",
    url: 'https://daffarafi.com',
    siteName: 'Daffa Rafi Portfolio',
    images: [
      {
        url: '/assets/images/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Daffa Rafi - Web Developer & Designer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daffa Rafi - Web Developer & Designer',
    description:
      "Hi! My name is Muhammad Daffa'I Rafi Prasetyo, 22 years old. I'm a Web Developer and Designer, based in Jakarta, Indonesia.",
    images: ['/assets/images/profile.jpeg'],
    creator: '@DaffaTGI',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/assets/images/favicon.ico',
    shortcut: '/assets/images/favicon.ico',
    apple: '/assets/images/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#061223',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/assets/images/favicon.ico" />
        <meta name="theme-color" content="#061223" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${josefinSans.variable} ${sourceSans.variable} modern-scrollbar`}
      >
        <StructuredData />
        <div className="w-full h-screen">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
