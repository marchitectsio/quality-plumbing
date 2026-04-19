import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Andre Taylor Plumbing and our 25 years serving homeowners.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">About Andre Taylor Plumbing</h1>
      <div className="mt-6 max-w-3xl space-y-4 text-slate-700">
        <p>Serving homeowners for over 25 years.</p>
        <p>Recognizable service fleet and reliable scheduling.</p>
        <p>Focused on consistent service and modern systems.</p>
      </div>
      <Link href="/book" className="mt-6 inline-block rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
    </section>
  );
}
