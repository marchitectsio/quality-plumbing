import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description: 'Browse professional plumbing services for drains, leaks, water heaters, and emergencies.',
  alternates: { canonical: '/services' }
};

export default function ServicesPage() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">Plumbing Services</h1>
      <p className="mt-2 text-slate-700">Choose a service to view common symptoms, causes, and booking options.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-lg border p-5 hover:border-navy">
            <h2 className="font-semibold">{service.name}</h2>
            <p className="mt-2 text-sm text-slate-600">{service.short}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
