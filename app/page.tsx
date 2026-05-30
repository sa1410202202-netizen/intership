'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { BiPlayCircle } from 'react-icons/bi';
import ThreeScene from '../components/ThreeScene';
import ContactForm from '../components/ContactForm';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Demo', href: '#demo' },
  { label: 'Paths', href: '#paths' },
  { label: 'Courses', href: '#courses' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '#contact' },
];

// Floating stat card component
function FloatingStatCard({ position, stat, label, delay }: { position: string; stat: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.6 + delay, duration: 0.6, type: 'spring' }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,245,255,0.2)' }}
      className={`absolute ${position} px-6 py-4 rounded-xl border border-cyan-500/40 bg-gradient-to-br from-slate-900/80 to-slate-950/60 backdrop-blur-xl shadow-lg`}
    >
      <div className="text-2xl font-bold text-cyan-400">{stat}</div>
      <div className="text-xs text-slate-300 mt-1">{label}</div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#0a1929] to-slate-900 tech-grid">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient mesh */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen opacity-5 blur-3xl" style={{ animation: 'float 10s ease-in-out infinite' }} />
      </div>

      {/* Enhanced navbar */}
      <header className="sticky top-0 z-50 border-b border-cyan-500/20 backdrop-blur-2xl bg-slate-950/50">
        <div className="layout mx-auto flex items-center justify-between px-6 py-4 text-white">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <img src="/logo.jpg" alt="SparkleBots Logo" className="h-10 w-auto hover:brightness-125 transition-all duration-300 drop-shadow-[0_0_8px_rgba(0,245,255,0.3)]" />
          </motion.div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item, idx) => (
              <motion.div key={item.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05, duration: 0.4 }}>
                <Link href={item.href} className="text-sm text-slate-300 hover:text-cyan-300 transition-all duration-300 relative group">
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="hidden items-center gap-3 md:flex">
            <Link href="#contact" className="relative rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-6 py-2.5 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:border-cyan-300/80 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] group overflow-hidden">
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        {/* Background glow layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,245,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(123,97,255,0.1),transparent_60%)]" />

        <div className="layout mx-auto flex min-h-screen flex-col gap-12 px-6 py-16 text-white md:flex-row md:items-center md:justify-between md:py-24">
          {/* Left side - Text content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative z-10 max-w-2xl space-y-8 flex-1">
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-3 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/20 to-purple-500/10 px-4 py-2.5 text-xs uppercase tracking-[0.3em] text-cyan-200 shadow-[0_0_20px_rgba(0,245,255,0.2)]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Robotics · AI · STEM Learning
            </motion.div>

            {/* Main heading with gradient */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <h1 className="text-4xl font-extrabold leading-tight tracking-[-0.04em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-white sm:text-5xl md:text-6xl font-poppins drop-shadow-lg">
                Transform Your Child<br />Into a Tech Leader
              </h1>
              <p className="mt-3 text-base text-cyan-300/80 font-light">Hands-on robotics, AI, coding and drone technology programs for learners aged 6-18.</p>
            </motion.div>

            {/* Description */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="space-y-4">
              <p className="max-w-xl text-base text-slate-300 sm:text-lg font-inter leading-relaxed">
                SparkleBots empowers young minds with practical learning in Robotics, AI, Coding, and Drone Technology. Since 2009, we help students learn by doing through real-world project experiences.
              </p>
              <p className="max-w-xl text-base text-slate-300 sm:text-lg font-inter leading-relaxed">
                Start with a free demo class, choose the right learning path, and grow through project-based training that parents trust and students enjoy.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="grid gap-4 sm:grid-cols-3 pt-4">
              <Link href="#demo" className="group relative rounded-3xl border border-cyan-400/30 bg-slate-950/60 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-500/10 hover:shadow-[0_0_25px_rgba(0,245,255,0.18)] overflow-hidden">
                <span className="relative z-10">Register Free Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-[0.15] transition-all duration-300" />
              </Link>

              <Link href="#paths" className="group relative rounded-3xl border border-purple-400/30 bg-slate-950/60 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-purple-300/70 hover:bg-purple-500/10 hover:shadow-[0_0_25px_rgba(123,97,255,0.18)] overflow-hidden">
                <span className="relative z-10">Learning Paths</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-0 group-hover:opacity-[0.15] transition-all duration-300" />
              </Link>

              <Link href="#contact" className="group relative rounded-3xl border border-teal-400/30 bg-slate-950/60 px-6 py-4 text-center text-sm font-semibold text-white transition-all duration-300 hover:border-teal-300/70 hover:bg-teal-500/10 hover:shadow-[0_0_25px_rgba(56,189,248,0.18)] overflow-hidden">
                <span className="relative z-10">Contact Admissions</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 opacity-0 group-hover:opacity-[0.15] transition-all duration-300" />
              </Link>
            </motion.div>

            {/* Info Grid */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="grid grid-cols-2 gap-4 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/50 to-slate-900/30 backdrop-blur p-6 sm:grid-cols-4">
              {[
                { label: 'Ages 6-10', value: 'Foundation' },
                { label: 'Ages 11-14', value: 'Innovation' },
                { label: 'Ages 14-18', value: 'Advanced' },
                { label: 'Live Demo', value: 'Weekly' },
              ].map((item, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }} className="space-y-1 text-sm">
                  <p className="text-cyan-400 font-semibold">{item.label}</p>
                  <p className="text-slate-300">{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Path Details */}
          <section className="layout mx-auto mt-14 px-6 perspective-container">
            <div className="grid gap-6 lg:grid-cols-3">
              <div id="grade10" className="gradient-border-card tilt-card-3d p-8 backdrop-blur-xl cursor-pointer">
                <div className="tilt-card-inner">
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Ages 6-10</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Foundation Program</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">A fun, hands-on introduction to robotics and coding with age-appropriate experiments and guided projects.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>• Build block-based robots</li>
                    <li>• Learn basic sensors and controls</li>
                    <li>• Projects, competitions, and certificates</li>
                  </ul>
                </div>
              </div>

              <div id="diploma-degree" className="gradient-border-card tilt-card-3d p-8 backdrop-blur-xl cursor-pointer">
                <div className="tilt-card-inner">
                  <p className="text-sm uppercase tracking-[0.32em] text-purple-200">Ages 11-14</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Innovator Track</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">A practical program with electronics, Python, IoT, and robotics projects for growing problem solvers.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>• Circuit building and microcontrollers</li>
                    <li>• Python programming fundamentals</li>
                    <li>• Real-world STEM project outcomes</li>
                  </ul>
                </div>
              </div>

              <div id="internship" className="gradient-border-card tilt-card-3d p-8 backdrop-blur-xl cursor-pointer">
                <div className="tilt-card-inner">
                  <p className="text-sm uppercase tracking-[0.32em] text-teal-200">Ages 14-18</p>
                  <h3 className="mt-4 text-xl font-semibold text-white">Advanced STEM</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Deep-dive into AI, IoT, robotics and capstone projects that prepare students for higher studies and tech careers.</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    <li>• Raspberry Pi, ESP32 and AI labs</li>
                    <li>• Vision computing and robotics design</li>
                    <li>• Portfolio-ready capstone projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Right side - 3D Scene */}
          <motion.div initial={{ opacity: 0, x: 50, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative flex-1">
            {/* Multiple layered glows for depth */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-cyan-500/20 via-transparent to-purple-500/20 blur-3xl" />
            <div className="absolute inset-8 rounded-[2rem] bg-gradient-to-t from-cyan-500/10 to-transparent blur-2xl" />

            {/* 3D Scene Container */}
            <div className="relative mx-auto h-[550px] w-full max-w-3xl rounded-[2rem] border border-cyan-500/40 bg-gradient-to-br from-slate-900/80 to-slate-950/60 p-4 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Light rays effect */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(0,245,255,0.03)_50%,transparent_70%)] group-hover:opacity-100 opacity-50 transition-opacity duration-300" />
              
              <ThreeScene />

              {/* Vignette */}
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-transparent via-transparent to-slate-950/30 pointer-events-none" />
            </div>

            {/* Floating stats around 3D scene */}
            <FloatingStatCard position="bottom-24 -left-8" stat="500+" label="Students Empowered" delay={0} />
            <FloatingStatCard position="top-20 -right-6" stat="50hrs" label="Internship Duration" delay={0.2} />
            <FloatingStatCard position="bottom-32 -right-4" stat="100%" label="Industry Ready" delay={0.4} />
          </motion.div>
        </div>
      </section>

      <section id="about" className="layout mx-auto px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.4fr,0.8fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100">
              About SparkleBots
            </span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl font-poppins">Empowering young innovators with hands-on robotics and future-ready STEM skills.</h2>
            <p className="max-w-2xl text-slate-300 leading-relaxed font-inter">
              Since 2009, SparkleBots has been a practical robotics and technology learning platform for students aged 6 to 18. We help learners build future-ready skills through real projects in Robotics, AI, Coding, and Drone Technology.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {['Hands-On Learning', 'Expert Guidance', 'Future-Ready Skills', 'Trusted Outcomes'].map((feature) => (
              <div key={feature} className="glass-card rounded-3xl p-6 shadow-glow">
                <h3 className="text-lg font-semibold text-white font-montserrat">{feature}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Real robotics labs, skilled mentorship, and project-based courses built to boost confidence and college readiness.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo" className="layout mx-auto px-6 py-24">
        <div className="text-center">
          <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Free Demo Classes</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl font-poppins">Try SparkleBots before you enroll.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300 leading-7">Join our weekly demo classes to experience Robotics, AI, and electronics training in a fun, supportive environment.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Robotics and AI Basics',
              details: 'Build and control your first robot.',
              schedule: 'Saturday • 10:00 AM',
              age: 'Age 6-10 years',
            },
            {
              title: 'Python Programming',
              details: 'Start coding with fun interactive projects.',
              schedule: 'Saturday • 2:00 PM',
              age: 'Age 10-14 years',
            },
            {
              title: 'Arduino & Electronics',
              details: 'Hands-on electronics workshop for beginners.',
              schedule: 'Sunday • 10:00 AM',
              age: 'Age 11-18 years',
            },
          ].map((demo) => (
            <div key={demo.title} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-panel transition hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-200 text-2xl">🤖</div>
              <h3 className="mt-6 text-2xl font-semibold text-white">{demo.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{demo.details}</p>
              <div className="mt-6 space-y-2 text-sm text-slate-400">
                <p>{demo.schedule}</p>
                <p>{demo.age}</p>
              </div>
              <Link href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Register for Free Demo <FiArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="layout mx-auto px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6">
            <span className="text-cyan-200 uppercase tracking-[0.4em] text-sm">Contact</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl font-poppins">Connect with SparkleBots admissions and demo support.</h2>
            <p className="max-w-xl text-slate-300 leading-7">Reach out for program details, course recommendations, and free demo class registration.</p>
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/40 p-8 shadow-panel">
              <div className="flex items-center gap-4 text-slate-200">
                <FiMail size={22} className="text-cyan-300" />
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Email</p>
                  <p className="text-base">hello@sparklebots.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-200">
                <FiPhone size={22} className="text-cyan-300" />
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Phone</p>
                  <p className="text-base">+91 8446767555</p>
                  <p className="text-base">+91 8446767999</p>
                  <p className="text-base">+91 8446630300</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-200">
                <FiMapPin size={22} className="text-cyan-300" />
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-200">Visit</p>
                  <p className="text-base">Robotics & AI Innovation Lab</p>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/70 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">WhatsApp Support</p>
                <p className="mt-2">Quick guidance for parents and students with priority connectivity.</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950/60 py-10">
        <div className="layout mx-auto flex flex-col gap-6 px-6 text-slate-300 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">SparkleBots Robotics & AI</p>
            <p className="text-sm text-slate-400">Hands-on STEM learning for ages 6-18. Free demo classes and project-based courses.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <Link href="#home" className="hover:text-white">Home</Link>
            <Link href="#demo" className="hover:text-white">Demo</Link>
            <Link href="#paths" className="hover:text-white">Paths</Link>
            <Link href="#contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

