'use client';

import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  target: number;
  label: string;
}

export default function AnimatedCounter({ target, label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);
    const timer = window.setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        window.clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <div className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow">
      <p className="text-4xl font-semibold text-cyan-200">{count}+</p>
      <p className="mt-3 text-sm text-slate-300">{label}</p>
    </div>
  );
}
