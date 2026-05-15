import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SessionProvider } from "next-auth/react";
import { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    template: '%s | AUTORIC',
    default: 'AUTORIC AUTOMAÇÃO&SISTEMAS',
  },
  description: 'Soluções em automação industrial, comercial e residencial com tecnologia, inovação e confiança.',
  metadataBase: new URL('https://www.autoric.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.autoric.com.br',
    title: 'AUTORIC AUTOMAÇÃO&SISTEMAS',
    description: 'Soluções em automação industrial, comercial e residencial com tecnologia, inovação e confiança.',
    siteName: 'AUTORIC',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AUTORIC AUTOMAÇÃO&SISTEMAS',
    description: 'Soluções em automação industrial, comercial e residencial com tecnologia, inovação e confiança.',
    images: [{ url: 'https://www.autoric.com.br/og-image.jpg' },
    ],
  },
  robots: {
    follow: true,
    index: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WY7EJ45YSF"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WY7EJ45YSF');
          `}
        </Script>
      </head>
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
          {children}
        </SessionProvider>
        <Analytics /> {/* Vercel Analytics */}
      </body>
    </html>
  );
}
