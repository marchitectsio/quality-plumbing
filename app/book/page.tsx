import type { Metadata } from 'next';
import { BookForm } from '@/components/book-form';

export const metadata: Metadata = {
  title: 'Book Service',
  description: 'Submit your plumbing request and schedule a technician visit.',
  alternates: { canonical: '/book' }
};

export default function BookPage() {
  return (
    <section className="container-page py-12">
      <h1 className="text-3xl font-bold text-navy">Book Service</h1>
      <BookForm />
    </section>
  );
}
