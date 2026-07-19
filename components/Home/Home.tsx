import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Project from './Project';
import Show_Feast from '@/public/images/Show_Feast.png';
import Skill from './Skill';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container max-w-6xl px-4 py-4 sm:px-6 sm:py-8 lg:px-8">
      {/* Top Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pb-6 sm:pt-4 sm:pb-8">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-sm sm:h-10 sm:w-10">
            <Image
              src={Show_Feast}
              alt="Prem Raj Avatar"
              className="h-full w-full object-cover"
              priority
              sizes="(max-width: 640px) 36px, 40px"
            />
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-400 backdrop-blur-md sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-20 lg:space-y-28">
        <Hero />
        <Experience />
        <Project />
        <Skill />
        <Contact />
      </div>

      <footer className="mt-16 space-y-1.5 border-t border-white/10 py-6 text-center text-xs text-neutral-400 sm:mt-24 sm:py-8">
        <p>© {new Date().getFullYear()} Prem Raj. All rights reserved.</p>
        <p>Built with Next.js, React, Tailwind CSS, and Framer Motion.</p>
      </footer>
    </div>
  );
}
