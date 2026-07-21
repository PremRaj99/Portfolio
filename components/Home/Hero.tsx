'use client';

import Say_Hi from '@/public/images/Say_Hii.png';
import Show_Yo from '@/public/images/Show_Yo.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedinIn, FaRocket, FaShieldAlt, FaWhatsapp } from 'react-icons/fa';
import { FiCheckCircle, FiGithub } from 'react-icons/fi';
import Card from '../common/Card';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="grid grid-cols-12 items-stretch gap-4 sm:gap-6"
    >
      {/* Main Content Card */}
      <Card className="col-span-12 flex flex-col justify-between border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-950/90 to-black p-5 sm:p-7 md:col-span-8 lg:p-9">
        <div>
          {/* Top Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Profile Avatar & Name */}
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-orange-500/30 p-0.5 shadow-md shadow-orange-500/10 sm:h-12 sm:w-12">
                <Image
                  src={Show_Yo}
                  alt="Prem Raj - Full Stack Engineer"
                  className="h-full w-full rounded-full object-cover"
                  priority
                  sizes="(max-width: 640px) 40px, 48px"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-white sm:text-lg">Prem Raj</span>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                    Online
                  </span>
                </div>
                <span className="text-xs font-medium text-orange-400">Full Stack Engineer</span>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center gap-2 sm:flex-nowrap">
              <a
                href="https://github.com/PremRaj99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 sm:h-10 sm:w-10"
              >
                <FiGithub className="text-base sm:text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/premraj99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400 sm:h-10 sm:w-10"
              >
                <FaLinkedinIn className="text-base sm:text-lg" />
              </a>

              <a
                href="https://wa.me/916200103129"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Direct Chat"
                className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2.5 text-sm font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20"
              >
                <FaWhatsapp size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Primary H1 Headline */}
          <h1 className="mt-6 text-2xl leading-tight font-bold text-white sm:mt-8 sm:text-3xl lg:text-4xl">
            Architecting high-throughput web applications, structured backends, and real-time
            systems.
          </h1>

          {/* Value Proposition Description */}
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-neutral-300 sm:mt-4 sm:text-sm lg:text-base">
            Full-stack engineer specializing in Next.js, microservices, and event-driven
            architecture. I bridge high-performance backend engineering with refined, product-level
            UI/UX.
          </p>
        </div>

        {/* Feature Badges */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4 sm:mt-8 sm:pt-5">
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-neutral-300">
            <FaRocket className="text-xs text-orange-400" />
            <span>Full-Stack Development</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-neutral-300">
            <FiCheckCircle className="text-xs text-emerald-400" />
            <span>Payment Integrations</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-neutral-300">
            <FaShieldAlt className="text-xs text-cyan-400" />
            <span>APIs & System Architecture</span>
          </div>
        </div>
      </Card>

      {/* Signature Image Showcase Card */}
      <Card className="group relative col-span-12 hidden min-h-[280px] items-center justify-center overflow-hidden border border-white/10 p-0 sm:min-h-[320px] md:col-span-4 md:flex">
        <Image
          src={Say_Hi}
          alt="Prem Raj - Full Stack Developer Portrait"
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/60 p-3 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-white">Prem Raj</span>
            <span className="text-[11px] text-neutral-300">Full Stack Engineer</span>
          </div>
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
        </div>
      </Card>
    </motion.div>
  );
}
