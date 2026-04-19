'use client';

import { FormEvent } from 'react';

export function BookForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
    console.log('Booking request', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid max-w-2xl gap-4">
      <label className="grid gap-2">Issue
        <div className="grid gap-2 sm:grid-cols-2">
          <select name="issue" className="rounded border p-3" required>
            <option value="">Select issue</option>
            <option>Drain</option><option>Leak</option><option>Water heater</option><option>Sewer line</option><option>Fixture</option><option>Emergency</option>
          </select>
          <input name="issueDetails" placeholder="Add issue details" className="rounded border p-3" />
        </div>
      </label>
      <label className="grid gap-2">Urgency
        <select name="urgency" className="rounded border p-3" required><option>Emergency</option><option>Standard</option></select>
      </label>
      <label className="grid gap-2">Address<input name="address" className="rounded border p-3" required /></label>
      <label className="grid gap-2">Name<input name="name" className="rounded border p-3" required /></label>
      <label className="grid gap-2">Phone<input name="phone" className="rounded border p-3" required /></label>
      <label className="grid gap-2">Email<input type="email" name="email" className="rounded border p-3" required /></label>
      <button className="rounded-md bg-redcta px-5 py-3 font-semibold text-white">Submit Request</button>
    </form>
  );
}
