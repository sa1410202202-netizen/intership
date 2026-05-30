'use client';

import Link from 'next/link';

export default function DiplomaDegreePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="layout mx-auto px-6 py-24">
        <div className="max-w-4xl rounded-[2rem] border border-purple-500/20 bg-slate-900/80 p-10 shadow-glow backdrop-blur-xl">
          <div className="space-y-6 text-center">
            <span className="text-purple-200 uppercase tracking-[0.4em] text-sm">Advanced STEM Track</span>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">SparkleBots Advanced Learner Programs</h1>
            <p className="mx-auto max-w-3xl text-slate-300 leading-8">SparkleBots helps older learners and diploma students build advanced skills in AI, IoT, robotics, and portfolio-ready projects.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-purple-200">Key outcomes</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• AI, IoT and robotics portfolio projects</li>
                <li>• Industry-aligned research labs</li>
                <li>• Career-focused mentorship and guidance</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-purple-200">Structure</h2>
              <ul className="mt-4 space-y-3 text-slate-300 text-sm">
                <li>• Mentored project sprints</li>
                <li>• Weekly industry review sessions</li>
                <li>• Skills assessment + feedback</li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
              <h2 className="text-xl font-semibold text-purple-200">Support</h2>
              <p className="mt-4 text-slate-300 text-sm leading-6">Dedicated mentorship, career guidance, and polished presentations help students convert learning into competitive advantage.</p>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="rounded-full border border-purple-400/40 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500/10">Back to Home</Link>
            <Link href="#" className="rounded-full bg-purple-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-purple-400">Request Program Info</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
