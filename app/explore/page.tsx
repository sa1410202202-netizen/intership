'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { AiOutlineCloudServer, AiOutlineRobot, AiOutlineCode } from 'react-icons/ai';
import { BiRocket } from 'react-icons/bi';

const processSteps = ['Registration', 'Personal Interview', 'Skill Assessment', 'Training Recommendation', 'Mentoring', 'Project Work', 'Completion'];

const programs = [
  {
    title: '6 Month Program',
    subtitle: 'Young Innovator Path',
    benefits: ['Foundation robotics projects', 'Weekly mentor sessions', 'Certificate of completion'],
  },
  {
    title: '9 Month Program',
    subtitle: 'Intermediate Growth Track',
    benefits: ['Electronics & Python labs', 'Live collaboration sessions', 'Portfolio-ready outcome'],
  },
  {
    title: '12 Month Program',
    subtitle: 'Advanced STEM Cohort',
    benefits: ['AI & IoT capstones', 'Industry mentorship', 'Career preparation'],
  },
];

const trainings = [
  { name: 'Robotics and AI Basics', icon: AiOutlineRobot },
  { name: 'Python Programming', icon: AiOutlineCode },
  { name: 'Arduino & Electronics', icon: AiOutlineCloudServer },
  { name: 'Image Processing', icon: AiOutlineCloudServer },
  { name: 'IoT & Embedded Systems', icon: BiRocket },
];

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-navy text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="layout mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-cyan-200">SparkleBots</Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/testimonials" className="hover:text-white">Testimonials</Link>
            <Link href="#programs" className="hover:text-white">Programs</Link>
            <Link href="#training" className="hover:text-white">Training</Link>
            <Link href="#certifications" className="hover:text-white">Certifications</Link>
            <Link href="#gallery" className="hover:text-white">Gallery</Link>
          </div>
        </div>
      </header>

      <section className="layout mx-auto px-6 py-24 text-center">
        <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Explore the full experience</span>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl font-poppins">A dedicated space for SparkleBots program details and immersive offerings.</h1>
        <p className="mx-auto mt-6 max-w-3xl text-slate-300 leading-8">Dive into program structures, training modules, certificates, and gallery previews designed for students who want more than a brochure.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="#programs" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Start with Programs</Link>
          <Link href="#training" className="rounded-full border border-white/10 bg-slate-950/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900">Training Outline</Link>
        </div>
      </section>

      <section id="process" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Process</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">An immersive internship roadmap for students and parents.</h2>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow">
            <p className="text-slate-300">SparkleBots guides every student through a premium 7-step journey with clarity at each milestone.</p>
            <div className="mt-8 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200">{index + 1}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{step}</h3>
                    <p className="mt-2 text-sm text-slate-300">Focused mentoring, live review, and outcome-driven next steps.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 p-8 shadow-panel">
            <div className="flex h-full flex-col justify-between gap-6 rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">Why this process works</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Clear steps, smart feedback, measurable outcomes.</h3>
                <p className="mt-4 text-slate-300 leading-7">Parent-friendly updates, student milestones, and mentor-led momentum make each internship feel premium yet easy to follow.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/90 p-6">
                  <p className="text-sm text-slate-400">Family-ready progress checks</p>
                </div>
                <div className="rounded-3xl bg-slate-900/90 p-6">
                  <p className="text-sm text-slate-400">Project-centered learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Programs</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Choose the track that matches your ambition.</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {programs.map((program) => (
            <motion.div key={program.title} whileHover={{ y: -8 }} className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-panel transition duration-500 hover:border-cyan-300/30">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-100">{program.subtitle}</div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{program.title}</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                {program.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <FiCheckCircle className="text-cyan-300" /> {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between">
                <span className="rounded-3xl bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">Premium</span>
                <Link href="#contact" className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Enroll Now</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="training" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Training</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Hands-on modules for future-ready skillsets.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {trainings.map((training) => {
            const Icon = training.icon;
            return (
              <motion.div whileHover={{ scale: 1.03 }} key={training.name} className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200 shadow-lg">
                  <Icon size={28} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{training.name}</h3>
                <p className="mt-4 text-slate-300 leading-7">Live labs, guided projects, and tool-driven training for fast learners and complete beginners.</p>
                <button className="mt-8 inline-flex items-center justify-center rounded-full border border-cyan-300/20 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/15">Learn More</button>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="certifications" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Certifications</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Secure certificates that elevate student portfolios.</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {['Training Certificate', 'Internship Certificate', 'Evaluation Certificate'].map((label) => (
            <motion.div key={label} whileHover={{ y: -10 }} className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-panel">
              <div className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
              <span className="text-sm uppercase tracking-[0.3em] text-cyan-200">Certificate</span>
              <h3 className="mt-5 text-2xl font-semibold text-white">{label}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">Shiny digital credentials with an authentic premium finish built to impress parents and industries.</p>
              <div className="mt-8 flex items-center justify-between gap-3">
                <div className="rounded-3xl bg-slate-950/60 px-4 py-3 text-xs uppercase tracking-[0.26em] text-slate-300">Verified</div>
                <div className="rounded-3xl bg-cyan-500/10 px-4 py-3 text-xs uppercase tracking-[0.26em] text-cyan-200">Secure</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="gallery" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Gallery</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Visual highlights from labs, workshops, and success journeys.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {['Workshops', 'Internship Activities', 'Coding Sessions', 'Student Projects', 'Innovation Labs', 'Showcase Events'].map((item) => (
            <div key={item} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 transition hover:-translate-y-2 hover:border-cyan-300/30">
              <div className="mb-6 h-48 rounded-[1.5rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 shadow-inner" />
              <h3 className="text-xl font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm text-slate-300">Interactive gallery preview with immersive hover and lightbox-ready layout.</p>
            </div>
          ))}
        </div>
      </section>

      <section className="layout mx-auto px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-10 shadow-panel">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <span className="text-cyan-200 uppercase tracking-[0.35em] text-sm">Rewards</span>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Top performers get recognition, awards, and excellence badges.</h2>
              <p className="mt-4 text-slate-300 leading-8">SparkleBots showcases achievement through trophies, monetary incentives, and certificates for high-achieving interns.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Trophy', value: 'Excellence Awards' },
                { label: 'Badge', value: 'Top Performer' },
                { label: 'Cash', value: 'Monetary Rewards' },
                { label: 'Star', value: 'Growth Recognition' },
              ].map((item) => (
                <div key={item.value} className="rounded-3xl bg-slate-950/70 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="layout mx-auto flex flex-col gap-4 px-6 text-slate-300 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">SparkleBots Robotics & AI</p>
            <p className="text-sm text-slate-400">Hands-on STEM programs for ages 6-18 with demo classes and project-based learning.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/testimonials" className="hover:text-white">Testimonials</Link>
            <Link href="#programs" className="hover:text-white">Programs</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

