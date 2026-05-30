'use client';

import Link from 'next/link';

export default function Grade10Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="layout mx-auto px-6 py-24">
        <div className="max-w-4xl rounded-[2rem] border border-cyan-500/20 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Foundation Path</span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">SparkleBots Foundation Programs</h1>
            <p className="mx-auto max-w-3xl text-slate-300 leading-8">A fun, project-based learning path for young learners aged 6-10 built around robotics, coding, and creative STEM exploration.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-cyan-200">What you learn</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• Robotics fundamentals with playful experiments</li>
                <li>• Scratch and block coding for concepts</li>
                <li>• Sensor control and creative project builds</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-cyan-200">Program format</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• Guided classroom and online labs</li>
                <li>• Weekly mentor sessions</li>
                <li>• Project showcase + completion certificate</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-cyan-200">Why it works</h2>
              <p className="mt-4 text-slate-300 text-sm leading-6">Designed for young learners, this pathway combines fun STEM labs with structured guidance so students learn confidently and parents see progress.</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="rounded-full border border-cyan-400/40 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500/10">Back to Home</Link>
            <Link href="#" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Contact for Enrollment</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
