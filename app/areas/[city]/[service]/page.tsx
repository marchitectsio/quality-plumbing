import type { Metadata } from 'next';
import Link from 'next/link';
import { cities, services } from '@/lib/site-data';

export function generateStaticParams() {
  return cities.flatMap((city) => services.map((service) => ({ city: city.slug, service: service.slug })));
}

export function generateMetadata({ params }: { params: { city: string; service: string } }): Metadata {
  return {
    title: `${params.service.replaceAll('-', ' ')} in ${params.city.replaceAll('-', ' ')}`,
    description: 'City + service specific plumbing landing page.',
    alternates: { canonical: `/areas/${params.city}/${params.service}` }
  };
}

export default function CityServicePage({ params }: { params: { city: string; service: string } }) {
  const city = cities.find((c) => c.slug === params.city);
  const service = services.find((s) => s.slug === params.service);

  if (!city || !service) return <div className="container-page py-12">Page not found.</div>;

  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">{service.name} in {city.name}</h1>
      <p className="mt-3 max-w-2xl text-slate-700">Local technicians provide {service.name.toLowerCase()} support for homeowners in {city.name}. Fast scheduling, clear communication, and tracked service history.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/book" className="rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
        <Link href={`/services/${service.slug}`} className="rounded-md border border-navy px-5 py-3 font-semibold text-navy">View Service Details</Link>
      </div>
    </section>
  );
}
