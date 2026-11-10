import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Deloren Comex | Especialistas em Comércio Exterior',
    template: '%s | Deloren Comex',
  },
  description: 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos. Especialistas em drawback, classificação fiscal, regimes especiais e consultoria tributária.',
  keywords: ['comércio exterior', 'importação', 'exportação', 'drawback', 'classificação fiscal', 'NCM', 'compliance aduaneiro', 'regimes especiais', 'consultoria tributária'],
  authors: [{ name: 'Deloren Comex' }],
  creator: 'Deloren Comex',
  publisher: 'Deloren Comex',
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
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://deloren.com.br',
    siteName: 'Deloren Comex',
    title: 'Deloren Comex | Especialistas em Comércio Exterior',
    description: 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Deloren Comex - Especialistas em Comércio Exterior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deloren Comex | Especialistas em Comércio Exterior',
    description: 'Simplificamos suas operações de importação e exportação com inteligência aduaneira, compliance e redução de custos.',
    images: ['/og-image.png'],
  },
  alternates: {
    languages: {
      'pt-BR': '/pt',
      'en': '/en',
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1d4ed8' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}