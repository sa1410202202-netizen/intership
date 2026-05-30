'use client';

import Link from 'next/link';

export default function InternshipPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="layout mx-auto px-6 py-24">
        <div className="max-w-4xl rounded-[2rem] border border-teal-500/20 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <span className="text-teal-200 uppercase tracking-[0.4em] text-sm">SparkleBots Programs</span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Robotics, AI and STEM learning experiences</h1>
            <p className="mx-auto max-w-3xl text-slate-300 leading-8">Discover SparkleBots programs designed for learners who want project-based training, live mentorship, and career-ready outcomes.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-teal-200">What’s included</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• Live mentor workshops</li>
                <li>• Internship project assignments</li>
                <li>• Certificates + placement support</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-teal-200">Who can join</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• 10th grade students</li>
                <li>• Diploma learners</li>
                <li>• Degree students</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-teal-200">Why SparkleBots</h2>
              <p className="mt-4 text-slate-300 text-sm leading-6">A supportive environment with real-world challenges helps every student level up and create tangible outcomes.</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="rounded-full border border-teal-400/40 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-500/10">Back to Home</Link>
            <Link href="#" className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400">Speak with Advisor</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
