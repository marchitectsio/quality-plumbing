import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileStickyBar } from '@/components/mobile-sticky';
import { JsonLd } from '@/components/json-ld';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: 'Andre Taylor Plumbing',
    template: '%s | Andre Taylor Plumbing'
  },
  description: 'Trusted plumbing service for San Jose and Sunnyvale homeowners.',
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: site.name,
            telephone: '+16503946321',
            areaServed: ['San Jose', 'Sunnyvale']
          }}
        />
        <Header />
        <main className="pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
