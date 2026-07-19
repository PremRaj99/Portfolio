import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Project from './Project';
import Show_Feast from '@/public/images/Show_Feast.png';
import Skill from './Skill';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Top Status Bar */}
      <div className="flex items-center justify-between pt-6 pb-2">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 shadow-sm">
            <Image
              src={Show_Feast}
              alt="Prem Raj Avatar"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>
        </div>
      </div>

      <div className="space-y-16">
        <Hero />
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </div>

      <footer className="mt-20 space-y-1 border-t border-white/10 py-8 text-center text-xs text-neutral-400">
        <p>© {new Date().getFullYear()} Prem Raj. All rights reserved.</p>
        <p>Built with Next.js, React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}
