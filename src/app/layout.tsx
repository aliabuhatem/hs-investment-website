import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { PageTransition } from '@/components/layout/PageTransition';

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const SITE_URL = 'https://hsinvestmentgroup.example';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HS Investment Group — Connecting Capital, Capability & Opportunity',
    template: '%s — HS Investment Group',
  },
  description:
    'A centralized holding with decentralized execution. HS Investment Group invests with active ownership across UAE, China, Turkey, Egypt & Yemen — connecting sourcing, processing and markets.',
  keywords: [
    'HS Investment Group',
    'holding company',
    'MENA investment',
    'private equity',
    'UAE investment',
    'emerging markets',
  ],
  openGraph: {
    title: 'HS Investment Group',
    description:
      'The Gateway to MENA & Emerging Global Markets. A centralized holding with decentralized execution.',
    url: SITE_URL,
    siteName: 'HS Investment Group',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HS Investment Group',
    description: 'Connecting Capital, Capability & Opportunity.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#15222B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <ScrollProgress />
          <Nav />
          <div id="main">
            <PageTransition>{children}</PageTransition>
          </div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
