import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import "./globals.css";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const clash = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/ClashDisplay-Medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/ClashDisplay-Semibold.otf',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../public/fonts/ClashDisplay-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-clash',
});

export const metadata: Metadata = {
  title: 'Roadtrip Community | Empowering Tech Professionals',
  description: 'Join Roadtrip Community - A vibrant tech community fostering growth, mentorship, and professional development. Connect with like-minded tech professionals and accelerate your career.',
  keywords: 'tech community, professional development, mentorship, tech events, career growth, tech professionals',
  authors: [{ name: 'Roadtrip Community' }],
  openGraph: {
    title: 'Roadtrip Community | Empowering Tech Professionals',
    description: 'Join Roadtrip Community - A vibrant tech community fostering growth, mentorship, and professional development.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Roadtrip Community',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roadtrip Community | Empowering Tech Professionals',
    description: 'Join Roadtrip Community - A vibrant tech community fostering growth, mentorship, and professional development.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${clash.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
