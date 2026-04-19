import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { faqItems, site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers to common plumbing scheduling, service, and emergency questions.',
  alternates: { canonical: '/faq' }
};

export default function FaqPage() {
  return (
    <section className="container-page py-12">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
        }}
      />
      <h1 className="text-3xl font-bold text-navy">FAQ</h1>
      <div className="mt-8 space-y-3">
        {faqItems.map((item) => (
          <details key={item.q} className="rounded-lg border p-4">
            <summary className="font-semibold">{item.q}</summary>
            <p className="mt-2 text-slate-700">{item.a}</p>
          </details>
        ))}
      </div>
      <div className="mt-10 rounded-lg bg-slate-50 p-6">
        <h2 className="text-xl font-semibold">Need help now?</h2>
        <p className="mt-2">Call now or book service.</p>
        <div className="mt-4 flex gap-3">
          <a href={site.phoneHref} className="rounded-md bg-redcta px-5 py-3 font-semibold text-white">Call Now</a>
          <Link href="/book" className="rounded-md border border-navy px-5 py-3 font-semibold text-navy">Book Service</Link>
        </div>
      </div>
    </section>
  );
}
