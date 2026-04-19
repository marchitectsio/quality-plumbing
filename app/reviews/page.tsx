import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Customer feedback and recent plumbing jobs.',
  alternates: { canonical: '/reviews' }
};

export default function ReviewsPage() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">Reviews</h1>
      <div className="mt-8 space-y-4">
        <div className="rounded-lg border p-4">“Great communication and clean work.” — Homeowner, San Jose</div>
        <div className="rounded-lg border p-4">“Fixed our leak quickly with clear pricing.” — Homeowner, Sunnyvale</div>
        <div className="rounded-lg border p-4">“On time and professional from start to finish.” — Homeowner, San Jose</div>
      </div>
      <h2 className="mt-10 text-2xl font-bold text-navy">Recent Jobs</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
        <li>Emergency shutoff and burst pipe stabilization</li>
        <li>Main line clearing for recurring whole-home backup</li>
        <li>Water heater diagnostics and thermostat replacement</li>
      </ul>
      <Link href="/book" className="mt-6 inline-block rounded-md bg-redcta px-5 py-3 font-semibold text-white">Book Service</Link>
    </section>
  );
}
