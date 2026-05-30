'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
      <h3 className="text-2xl font-semibold text-white font-poppins">Get in touch</h3>
      <p className="mt-3 text-slate-300">Submit your details and our admissions team will connect with you shortly.</p>
      <form className="mt-8 space-y-5">
        <label className="block text-sm font-medium text-slate-300">
          Name
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/30"
            placeholder="Enter your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Email
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/30"
            placeholder="Enter your email"
          />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Message
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-3 h-32 w-full rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none ring-1 ring-transparent transition focus:ring-cyan-400/30"
            placeholder="How can we help you?"
          />
        </label>
        <button type="button" className="w-full rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
