'use client';

import { FaLinkedinIn, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { FiGithub, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../common/Button';
import Card from '../common/Card';
import Show_Yo from '@/public/images/Show_Yo.png';
import Say_Hi from '@/public/images/Say_Hii.png';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-12 items-stretch gap-5 sm:gap-6"
    >
      {/* Main Content Card */}
      <Card className="col-span-12 flex flex-col justify-between border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-950/90 to-black p-5 sm:p-8 md:col-span-8">
        <div>
          {/* Top Header Row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Profile Avatar & Title */}
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-orange-500/30 p-0.5 shadow-md shadow-orange-500/10">
                <Image
                  src={Show_Yo}
                  alt="Prem Raj Avatar"
                  className="h-full w-full rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-base font-bold text-white sm:text-lg">Prem Raj</h2>
                  <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                    Online
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-orange-400">
                  AI SaaS & E-Commerce Architect
                </span>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/PremRaj99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <FiGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/prem-raj99"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all duration-300 hover:border-orange-500/40 hover:bg-orange-500/10 hover:text-orange-400"
              >
                <FaLinkedinIn className="text-lg" />
              </a>

              <Button
                onClick={() => {
                  window.location.href = 'https://wa.me/916200103129';
                }}
              >
                Build My Site
              </Button>
            </div>
          </div>

          {/* Core Sales Headline */}
          <h1 className="mt-6 text-2xl leading-tight font-extrabold text-white sm:mt-8 sm:text-3xl lg:text-4xl">
            I build production-ready{' '}
            <span className="text-orange-400 underline decoration-orange-500/40 underline-offset-4">
              AI SaaS
            </span>{' '}
            platforms & high-converting{' '}
            <span className="text-orange-400 underline decoration-orange-500/40 underline-offset-4">
              E-Commerce
            </span>{' '}
            stores.
          </h1>

          {/* Value Proposition Description */}
          <p className="mt-3 max-w-2xl text-xs leading-relaxed text-neutral-300 sm:mt-4 sm:text-sm">
            Helping startups, business owners, and founders turn ideas into scalable digital
            products. Specialized in custom AI workflows, payment-integrated online stores (Stripe &
            Razorpay), subscription billing, and sub-second web applications.
          </p>
        </div>

        {/* Highlight Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5 sm:gap-3">
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-300">
            <FaRocket className="text-xs text-orange-400" />
            <span>AI SaaS Architecture</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-300">
            <FiCheckCircle className="text-xs text-emerald-400" />
            <span>Payment Gateways</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 font-mono text-[11px] font-medium text-neutral-300">
            <FaShieldAlt className="text-xs text-cyan-400" />
            <span>High Concurrency API</span>
          </div>
        </div>
      </Card>

      {/* Signature Image Showcase Card (Desktop Only) */}
      <Card className="group relative col-span-12 hidden min-h-[280px] items-center justify-center overflow-hidden border border-white/10 p-0 sm:min-h-[320px] md:col-span-4 md:flex">
        <Image
          src={Say_Hi}
          alt="Prem Raj Portrait"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Ambient Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Floating Agency Glass Badge */}
        <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/60 p-3 backdrop-blur-md">
          <div className="flex flex-col">
            <span className="font-mono text-[10px] font-bold tracking-wider text-orange-400 uppercase">
              Prem Raj Studio
            </span>
            <span className="text-xs font-semibold text-white">Full-Stack & AI Systems</span>
          </div>
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-orange-500" />
        </div>
      </Card>
    </motion.div>
  );
}
