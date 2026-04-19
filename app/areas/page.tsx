import type { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Plumbing service coverage for San Jose and Sunnyvale.',
  alternates: { canonical: '/areas' }
};

export default function AreasPage() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">Service Areas</h1>
      <p className="mt-2 text-slate-700">Local plumbing support where homeowners need fast response.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {cities.map((city) => (
          <Link key={city.slug} href={`/areas/${city.slug}`} className="rounded-lg border p-6 hover:border-navy">
            <h2 className="font-semibold">{city.name}</h2>
            <p className="mt-2 text-sm text-slate-600">View available services in {city.name}.</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
