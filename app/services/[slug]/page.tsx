import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { cities, services, site } from '@/lib/site-data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = services.find((s) => s.slug === params.slug);
  return {
    title: service ? service.h1 : 'Service',
    description: service?.short,
    alternates: { canonical: `/services/${params.slug}` }
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return <div className="container-page py-12">Service not found.</div>;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <article className="container-page py-12">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.name,
          provider: { '@type': 'LocalBusiness', name: site.name, telephone: '+16503946321' },
          areaServed: ['San Jose', 'Sunnyvale']
        }}
      />
      <h1 className="text-3xl font-bold text-navy">{service.h1}</h1>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">What You May Notice</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">{service.notices.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">What Causes This</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">{service.causes.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">What Happens During Service</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">{service.process.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">When to Request Service</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">{service.when.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Service Area</h2>
        <p className="mt-2">Available across San Jose and Sunnyvale.</p>
        <div className="mt-3 flex gap-3">
          {cities.map((city) => (
            <Link key={city.slug} href={`/areas/${city.slug}`} className="text-navy underline">{city.name}</Link>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">FAQ</h2>
        <div className="mt-4 space-y-3">
          {service.faq.slice(0, 3).map((item) => (
            <details key={item.q} className="rounded border p-4">
              <summary className="font-medium">{item.q}</summary>
              <p className="mt-2 text-slate-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-xl bg-slate-50 p-6">
        <h2 className="text-xl font-semibold">Book this service</h2>
        <div className="mt-4 flex gap-3">
          <Link href="/book" className="rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
          <a href={site.phoneHref} className="rounded-md border border-navy px-5 py-3 font-semibold text-navy">Call Now</a>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Related Services</h2>
        <div className="mt-4 flex flex-wrap gap-4">
          {related.map((item) => <Link key={item.slug} className="text-navy underline" href={`/services/${item.slug}`}>{item.name}</Link>)}
        </div>
      </section>
    </article>
  );
}
