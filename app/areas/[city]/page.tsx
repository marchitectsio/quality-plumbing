import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, services } from '@/lib/site-data';

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((c) => c.slug === params.city);
  return {
    title: `Plumbing in ${city?.name ?? 'Your Area'}`,
    description: `Home plumbing services in ${city?.name ?? 'your city'}.`,
    alternates: { canonical: `/areas/${params.city}` }
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return <div className="container-page py-12">Area not found.</div>;

  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">{city.name} Plumbing Services</h1>
      <p className="mt-2 text-slate-700">Choose a service available in {city.name}.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link key={service.slug} href={`/areas/${city.slug}/${service.slug}`} className="rounded-lg border p-5 hover:border-navy">
            {service.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
