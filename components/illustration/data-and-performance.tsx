'use client';

import { cn } from '@/utils/cn';
import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { FaBolt, FaRocket, FaDatabase, FaHourglassHalf, FaRegFrown } from 'react-icons/fa';
import { SiRedis } from 'react-icons/si';

const BASE_WIDTH = 900;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

// --- Bold Item Node with Softened Color Contrast ---
const BoldItem = ({
  title,
  subtitle,
  children,
  isFast = true,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  isFast?: boolean;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.2 }}
      className="group flex cursor-pointer flex-col items-center justify-center text-center transition-all"
    >
      <div className="flex items-center justify-center p-1 opacity-90 transition-transform group-hover:scale-105 group-hover:opacity-100">
        {children}
      </div>

      <span className="mt-2 text-sm font-extrabold tracking-wider text-neutral-200">{title}</span>

      {subtitle && (
        <span
          className={cn(
            'mt-0.5 font-mono text-[11px] font-semibold',
            isFast ? 'text-emerald-400/80' : 'text-rose-400/80',
          )}
        >
          {subtitle}
        </span>
      )}
    </motion.div>
  );
};

export default function DataAndPerformance() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.offsetWidth;
      const newScale = Math.min(parentWidth / BASE_WIDTH, 1);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-transparent"
      style={{ height: `${BASE_WIDTH * 0.5 * scale}px`, minHeight: '300px' }}
    >
      {/* Scaled Canvas */}
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
        }}
        className="mx-auto flex items-center justify-center px-4"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex w-full items-center justify-between gap-0 font-sans"
        >
          {/* OPTIMIZED / FAST SIDE */}
          <div className="flex flex-col items-center gap-7">
            <div className="text-xs font-extrabold tracking-widest text-emerald-400/80 uppercase">
              ⚡ Instant Load (0.04s)
            </div>

            <BoldItem title="Instant Load" subtitle="0.04s Blitz Speed" isFast>
              <FaBolt size={44} className="text-emerald-400/90" />
            </BoldItem>

            <BoldItem title="Smart Caching" subtitle="Redis Memory Storage" isFast>
              <SiRedis size={46} className="text-red-500/90" />
            </BoldItem>

            <BoldItem title="High Performance" subtitle="Smooth User Experience" isFast>
              <FaRocket size={40} className="text-cyan-400/90" />
            </BoldItem>
          </div>

          {/* VS SPEED INDICATOR (Softened Contrast) */}
          <div className="relative flex h-64 w-32 flex-col items-center justify-between">
            <div className="flex flex-col items-center justify-center text-center font-mono">
              <span className="text-xs font-bold text-emerald-400/80">INSTANT</span>
              <span className="my-0.5 text-[10px] font-bold text-neutral-500">VS</span>
              <span className="text-xs font-bold text-rose-400/80">LAGGY</span>
            </div>

            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Fast Wire Track */}
              <path d="M 10 20 H 40 V 80 H 10" className="stroke-neutral-800/80" strokeWidth="2" />
              <motion.path
                d="M 10 20 H 40 V 80 H 10"
                className="stroke-emerald-500/50"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="20 70"
                animate={{ strokeDashoffset: [90, -90] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              />

              {/* Slow Wire Track */}
              <path d="M 90 20 H 60 V 80 H 90" className="stroke-neutral-800/80" strokeWidth="2" />
              <motion.path
                d="M 90 20 H 60 V 80 H 90"
                className="stroke-rose-500/40"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="20 70"
                animate={{ strokeDashoffset: [90, -90] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
              />
            </svg>

            <div className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
              BENCHMARK
            </div>
          </div>

          {/* UNOPTIMIZED / SLOW SIDE */}
          <div className="flex flex-col items-center gap-7">
            <div className="text-xs font-extrabold tracking-widest text-rose-400/80 uppercase">
              ⏳ Slow Loading (5.20s)
            </div>

            <BoldItem title="High Delay" subtitle="5.2s Waiting Time" isFast={false}>
              <FaHourglassHalf size={42} className="text-rose-400/90" />
            </BoldItem>

            <BoldItem title="Heavy Database" subtitle="Uncached Slow Queries" isFast={false}>
              <FaDatabase size={40} className="text-amber-400/90" />
            </BoldItem>

            <BoldItem title="Poor Experience" subtitle="Lost Website Visitors" isFast={false}>
              <FaRegFrown size={40} className="text-neutral-400/90" />
            </BoldItem>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
