import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.premraj.online'),
  title: {
    default: 'Prem Raj | Full Stack Developer & AI SaaS Architect',
    template: '%s | Prem Raj',
  },
  description:
    'Prem Raj is a Full Stack Developer & AI SaaS Architect specializing in Next.js, React, TypeScript, Microservices, MERN stack, and scalable cloud software.',
  keywords: [
    'Prem Raj',
    'Full Stack Developer',
    'AI SaaS Architect',
    'Next.js Developer',
    'React Developer',
    'TypeScript Developer',
    'Microservices',
    'MERN Stack',
    'Software Engineer',
    'WebRTC',
    'Node.js',
  ],
  authors: [{ name: 'Prem Raj', url: 'https://www.premraj.online' }],
  creator: 'Prem Raj',
  publisher: 'Prem Raj',
  alternates: {
    canonical: 'https://www.premraj.online',
  },
  openGraph: {
    title: 'Prem Raj | Full Stack Developer & AI SaaS Architect',
    description:
      'Full Stack Developer & AI SaaS Architect specializing in Next.js, React, TypeScript, Microservices, and high-performance Web Applications.',
    url: 'https://www.premraj.online',
    siteName: 'Prem Raj Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prem Raj | Full Stack Developer & AI SaaS Architect',
    description:
      'Full Stack Developer & AI SaaS Architect building production-ready platforms using Next.js, React, TypeScript, and Microservices.',
    creator: '@premraj',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Show_Yo.png',
    shortcut: '/Show_Yo.png',
    apple: '/Show_Yo.png',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prem Raj',
  jobTitle: 'Full Stack Developer & AI SaaS Architect',
  url: 'https://www.premraj.online',
  sameAs: ['https://github.com/PremRaj99', 'https://www.linkedin.com/in/prem-raj99'],
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Microservices',
    'MERN Stack',
    'Node.js',
    'AI SaaS',
    'WebRTC',
    'PostgreSQL',
    'Tailwind CSS',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
