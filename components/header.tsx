import Link from 'next/link';
import { site } from '@/lib/site-data';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold text-navy">Andre Taylor Plumbing</Link>
        <nav className="hidden gap-6 text-sm md:flex">
          <Link href="/services" className="hover:text-navy">Services</Link>
          <Link href="/areas" className="hover:text-navy">Areas</Link>
          <Link href="/faq" className="hover:text-navy">FAQ</Link>
          <Link href="/about" className="hover:text-navy">About</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={site.phoneHref} className="rounded-md bg-redcta px-4 py-2 text-sm font-semibold text-white">Call Now</a>
          <Link href="/book" className="rounded-md border border-navy px-4 py-2 text-sm font-semibold text-navy">Book Service</Link>
        </div>
      </div>
    </header>
  );
}
