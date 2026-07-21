'use client';

import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Project from './Project';
import Skill from './Skill';
import Show_Feast from '@/public/images/Show_Feast.png';
import Image from 'next/image';

export default function Home() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 backdrop-blur-md transition-all hover:border-emerald-500/60 hover:bg-emerald-500/20 active:scale-95"
            title="Click to jump to contact options"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for opportunities</span>
          </button>
        </div>
      </div>

      <div className="space-y-12 sm:space-y-20 lg:space-y-28">
        <Hero />
        <Experience />
        <Project />
        <Skill />
        <div id="contact" className="scroll-mt-10">
          <Contact />
        </div>
      </div>

      <footer className="mt-16 space-y-1 border-t border-white/10 py-6 text-center text-xs text-neutral-400 sm:mt-24 sm:py-8">
        <p>© {new Date().getFullYear()} Prem Raj. All rights reserved.</p>
        <p>Built with Next.js, React, and Tailwind CSS.</p>
      </footer>
    </div>
  );
}
