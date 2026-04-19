import type { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/lib/site-data';
import { site } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Trusted Plumbing. 25 Years. Booked in Minutes',
  description: 'Fast response plumbing with real technicians and tracked service history.',
  alternates: { canonical: '/' }
};

export default function HomePage() {
  return (
    <div>
      <section className="container-page py-14">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-navy">Trusted Plumbing. 25 Years. Booked in Minutes</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">Fast response. Real technicians. Service history tracked for your home.</p>
        <div className="mt-6 flex gap-3">
          <Link href="/book" className="rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
          <a href={site.phoneHref} className="rounded-md border border-navy px-5 py-3 font-semibold text-navy">Call Now</a>
        </div>
      </section>

      <section className="container-page py-8">
        <div className="grid gap-3 rounded-xl border p-4 md:grid-cols-4">
          <input placeholder="Issue" className="rounded border p-3" />
          <select className="rounded border p-3"><option>Urgency</option><option>Emergency</option><option>Standard</option></select>
          <input placeholder="ZIP code" className="rounded border p-3" />
          <Link href="/book" className="rounded bg-navy p-3 text-center font-semibold text-white">Start Booking</Link>
        </div>
      </section>

      <section className="container-page py-12">
        <h2 className="text-2xl font-bold text-navy">Top Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-lg border p-5 hover:border-navy">
              <h3 className="font-semibold">{service.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-6 py-12 md:grid-cols-4">
        {['25 years serving homeowners', 'Recognizable service fleet', 'Real licensed technicians', 'Service tracking by home'].map((item) => (
          <div key={item} className="rounded-lg bg-slate-50 p-5">{item}</div>
        ))}
      </section>

      <section className="container-page py-12">
        <h2 className="text-2xl font-bold text-navy">How It Works</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {['Share issue', 'Get confirmation', 'Technician arrives', 'Receive service summary'].map((step, i) => (
            <li className="rounded-lg border p-4" key={step}><span className="font-semibold">{i + 1}. </span>{step}</li>
          ))}
        </ol>
      </section>

      <section className="container-page py-12">
        <h2 className="text-2xl font-bold text-navy">Reviews Preview</h2>
        <p className="mt-4 text-slate-700">“Fast, clean, and clear communication from booking to finish.”</p>
        <Link href="/reviews" className="mt-4 inline-block text-navy underline">Read reviews</Link>
      </section>

      <section className="container-page py-12">
        <div className="rounded-xl bg-navy p-8 text-white">
          <h2 className="text-2xl font-bold">Need help now?</h2>
          <p className="mt-2">Speak to a technician quickly.</p>
          <button className="mt-4 rounded-md bg-redcta px-5 py-3 font-semibold">Call and speak to a technician</button>
          {/* VAPI integration will be added here */}
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-navy">FAQ Preview</h2>
          <p className="mt-2 text-slate-700">See common plumbing questions and quick answers.</p>
          <Link href="/faq" className="mt-4 inline-block text-navy underline">Go to FAQ</Link>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-navy">About Andre Taylor Plumbing</h2>
          <p className="mt-2 text-slate-700">Serving homeowners for over 25 years with modern service workflows.</p>
          <Link href="/about" className="mt-4 inline-block text-navy underline">Learn more</Link>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-xl border bg-slate-50 p-8 text-center">
          <h2 className="text-2xl font-bold text-navy">Ready to book plumbing service?</h2>
          <Link href="/book" className="mt-4 inline-block rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
        </div>
      </section>
    </div>
  );
}
