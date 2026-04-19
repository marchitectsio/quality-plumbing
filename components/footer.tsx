import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t py-10">
      <div className="container-page flex flex-col justify-between gap-4 text-sm text-slate-600 md:flex-row">
        <p>© {new Date().getFullYear()} Andre Taylor Plumbing</p>
        <div className="flex gap-4">
          <Link href="/services">Services</Link>
          <Link href="/areas">Areas</Link>
          <Link href="/book">Book</Link>
        </div>
      </div>
    </footer>
  );
}
