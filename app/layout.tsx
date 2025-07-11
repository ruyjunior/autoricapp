import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { SessionProvider } from "next-auth/react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | AUTORIC',
    default: 'AUTORIC AUTOMAÇÃO',
  },
  description: 'AUTORIC, A SOLUÇÃO EM AUTOMAÇÃO PARA O SEU NEGÓCIO E A SUA VIDA',
  metadataBase: new URL('https://www.autoric.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
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
    <html lang="en-US">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
