'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiUpload, FiArrowRight, FiUsers, FiHeart } from 'react-icons/fi';

const stories = [
  { name: 'Ananya', role: 'CBSE 10th Student', quote: 'SparkleBots transformed my science project into a real innovation lab experience.' },
  { name: 'Rohan', role: 'Diploma Learner', quote: 'The robotics track gave me confidence and industry-level skills.' },
  { name: 'Priya', role: 'Degree Intern', quote: 'Mentors helped me build a portfolio that parents trust and companies notice.' },
];

const counters = [
  { value: 300, label: 'Students Empowered' },
  { value: 55, label: 'Live Mentor Sessions' },
  { value: 72, label: 'Projects Delivered' },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="layout mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-cyan-200">SparkleBots</Link>
          <Link href="/" className="rounded-full border border-cyan-300/20 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-100 transition hover:bg-cyan-500/20">Back to Home</Link>
        </div>
      </header>

      <section className="layout mx-auto px-6 py-24">
        <div className="space-y-6 text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Success Stories & Testimonials</span>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl font-poppins">Immersive stories from students and parents who experienced SparkleBots.</h1>
          <p className="mx-auto max-w-3xl text-slate-300 leading-8">A dedicated page for authentic feedback, video testimonials, image stories, and measurable growth through SparkleBots learning programs.</p>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.2fr,0.8fr]">
          <div className="grid gap-6">
            <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Upload stories</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Share your journey with audio, video, or photos.</h2>
                </div>
                <div className="flex gap-3">
                  <button className="rounded-full bg-cyan-500/15 px-5 py-3 text-sm text-cyan-100 transition hover:bg-cyan-500/25"><FiUpload className="inline mr-2" /> Upload Video</button>
                  <button className="rounded-full bg-violet-500/15 px-5 py-3 text-sm text-violet-100 transition hover:bg-violet-500/25"><FiUpload className="inline mr-2" /> Upload Photos</button>
                </div>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <h3 className="text-xl font-semibold text-white">Add Testimonial</h3>
                  <p className="mt-3 text-sm text-slate-300">A backend-ready placeholder for new reviews, quotes, and success story uploads.</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <h3 className="text-xl font-semibold text-white">Video Carousel</h3>
                  <p className="mt-3 text-sm text-slate-300">Multiple testimonial videos can be displayed here using a slick carousel UI.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {counters.map((counter) => (
                <div key={counter.label} className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200">{counter.label}</p>
                  <p className="mt-4 text-4xl font-semibold text-white">{counter.value}+</p>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-950/70 p-6 text-center">
                  <p className="text-3xl font-semibold text-cyan-200">4.9/5</p>
                  <p className="mt-2 text-sm text-slate-300">Average parent rating</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6 text-center">
                  <p className="text-3xl font-semibold text-cyan-200">95%</p>
                  <p className="mt-2 text-sm text-slate-300">Project success rate</p>
                </div>
                <div className="rounded-3xl bg-slate-950/70 p-6 text-center">
                  <p className="text-3xl font-semibold text-cyan-200">12K</p>
                  <p className="mt-2 text-sm text-slate-300">Engaged hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Before & After</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Visible growth from day one.</h3>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-200">Transformation</span>
              </div>
              <div className="mt-8 grid gap-5 rounded-3xl bg-slate-950/70 p-6">
                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Before</p>
                  <p className="mt-3 text-base text-slate-200">Unstructured study and limited project exposure.</p>
                </div>
                <div className="rounded-3xl bg-cyan-500/10 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">After</p>
                  <p className="mt-3 text-base text-white">Confident presentations, polished portfolios, and stronger parent trust.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8 shadow-glow">
              <div className="flex items-center gap-4 text-cyan-100">
                <FiUsers size={24} />
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Photo gallery</p>
                  <p className="mt-2 text-base text-slate-300">Snapshots of our internship labs, workshops, and live sessions.</p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-36 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="mt-20 grid gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <motion.div key={story.name} whileHover={{ y: -8 }} className="glass-card rounded-[2rem] border border-white/10 p-7 shadow-panel">
              <p className="text-sm uppercase tracking-[0.34em] text-cyan-200">{story.role}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{story.name}</h3>
              <p className="mt-4 text-slate-300 leading-7">“{story.quote}”</p>
            </motion.div>
          ))}
        </section>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="layout mx-auto flex flex-col gap-4 px-6 text-slate-300 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SparkleBots Robotics & AI. Designed for the next generation of innovators.</p>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <FiHeart className="text-cyan-300" /> Trusted by students and parents nationwide.
          </div>
        </div>
      </footer>
    </main>
  );
}

