import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prem Raj Portfolio",
  description:
    "A full-stack developer cum designer with a passion for creating beautiful and functional web applications.",
  icons: {
    icon: "/Show_Yo.png",
    shortcut: "/Show_Yo.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/Show_Yo.png",
      },
      {
        rel: "icon",
        url: "/Show_Yo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and icons */}
        <link rel="icon" href="/Show_Yo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Show_Yo.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={String(metadata.description ?? "")} />
        <meta name="author" content="Prem Raj" />
        {/* Open Graph tags */}
        <meta property="og:title" content={String(metadata.title ?? "")} />
        <meta property="og:description" content={String(metadata.description ?? "")} />
        <meta property="og:type" content="website" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
