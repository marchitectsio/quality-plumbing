import Link from 'next/link';
import { site } from '@/lib/site-data';

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white p-3 md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a href={site.phoneHref} className="rounded-md bg-redcta px-4 py-3 text-center text-sm font-semibold text-white">Call</a>
        <Link href="/book" className="rounded-md border border-navy px-4 py-3 text-center text-sm font-semibold text-navy">Book</Link>
      </div>
    </div>
  );
}
