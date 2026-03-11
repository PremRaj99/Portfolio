'use client';

import { cn } from '@/utils/cn';
import { Laptop, Smartphone, UserIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { easeInOut } from 'motion';
import React, { useEffect, useRef, useState } from 'react';
import {
  ApiGatewayLogo,
  AuthLogo,
  KafkaLogo,
  NotificationLogo,
  OrderLogo,
  PaymentLogo,
  PostgresLogo,
  RedisLogo,
  UserLogo,
} from './backend-arch/svgs';

// --- Global Config ---
const BASE_WIDTH = 900; // The "natural" width of the architecture

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: easeInOut },
  },
};

// --- Helper Components ---
const ArchNode = ({
  title,
  children,
  className,
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -2, boxShadow: '0 12px 24px -10px rgba(0,0,0,0.15)' }}
    className={cn(
      'group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-black/5 bg-white/60 p-4 backdrop-blur-md transition-all dark:border-white/10 dark:bg-neutral-900/60',
      className,
    )}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-white/5" />
    <div className="relative z-10">{children}</div>
    {title && (
      <span className="text-muted-foreground relative z-10 mt-3 text-center text-[9px] font-semibold tracking-[0.15em] text-neutral-500 uppercase dark:text-neutral-400">
        {title}
      </span>
    )}
  </motion.div>
);

const SectionBox = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    variants={itemVariants}
    className={cn(
      'relative flex flex-col gap-4 rounded-3xl border border-black/5 bg-black/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.5)] dark:border-white/[0.08] dark:bg-white/[0.02] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.02)]',
      className,
    )}
  >
    <div className="absolute -top-2.5 left-6 bg-neutral-50 px-2 dark:bg-neutral-950">
      <div className="text-[10px] font-medium tracking-widest text-neutral-400 uppercase">
        {title}
      </div>
    </div>
    {children}
  </motion.div>
);

export default function BackendArchitecture() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.offsetWidth;
      // Calculate scale based on parent width vs the 1200px design width
      const newScale = Math.min(parentWidth / BASE_WIDTH, 1);
      console.log('Parent width: ', parentWidth);
      console.log('Calculated scale: ', newScale);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-video w-96 items-center justify-center overflow-hidden"
      style={{ height: `${BASE_WIDTH * 0.5 * scale}px`, minHeight: '300px' }}
    >
      {/* Scaled Wrapper */}
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
        }}
        className="mx-auto flex items-center justify-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex w-full items-center justify-center gap-0"
        >
          {/* LEVEL 1: CLIENT SIDE */}
          <SectionBox title="Client Layer" className="items-center justify-center gap-5">
            <ArchNode title="Web App">
              <Laptop className="size-6 stroke-[1.5]" />
            </ArchNode>
            <ArchNode title="Mobile App">
              <Smartphone className="size-6 stroke-[1.5]" />
            </ArchNode>
            <ArchNode title="Admin">
              <UserIcon className="size-6 stroke-[1.5]" />
            </ArchNode>
          </SectionBox>

          <ConnectionLines />

          {/* LEVEL 2: API GATEWAY */}
          <SectionBox title="Entry Point">
            <ArchNode
              title="API Gateway"
              className="size-32 border-blue-500/10 bg-gradient-to-br from-blue-500/5 to-transparent"
            >
              <ApiGatewayLogo className="size-14 opacity-80" />
            </ArchNode>
          </SectionBox>

          <ConnectionLines />

          {/* LEVEL 3: MICROSERVICES */}
          <SectionBox title="Service Mesh" className="gap-4">
            <ArchNode title="Auth Service" className="py-2">
              <AuthLogo className="size-5" />
            </ArchNode>
            <ArchNode title="User Service" className="py-2">
              <UserLogo className="size-5" />
            </ArchNode>
            <ArchNode title="Payment Service" className="py-2">
              <PaymentLogo className="size-5" />
            </ArchNode>
            <ArchNode title="Order Service" className="py-2">
              <OrderLogo className="size-5" />
            </ArchNode>
            <ArchNode title="Notification" className="py-2">
              <NotificationLogo className="size-5" />
            </ArchNode>
          </SectionBox>

          <ConnectionLines />

          {/* LEVEL 4: DATA & INFRA */}
          <SectionBox title="Data Persistence" className="gap-5">
            <div className="flex flex-col gap-4">
              <ArchNode title="Primary DB">
                <PostgresLogo className="size-8" />
              </ArchNode>
              <ArchNode title="Cache">
                <RedisLogo className="size-8" />
              </ArchNode>
              <ArchNode title="Event Bus">
                <KafkaLogo className="size-8" />
              </ArchNode>
            </div>
          </SectionBox>
        </motion.div>
      </div>
    </div>
  );
}

function ConnectionLines() {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex h-64 w-24 min-w-24 items-center justify-center"
    >
      <svg
        className="absolute h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />

            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Static Background Paths (The "Wires") */}

        <g className="stroke-neutral-200 dark:stroke-neutral-800" strokeWidth="1.5">
          <path d="M 0 20 H 30 Q 40 20 40 30 V 40 Q 40 50 50 50 H 100" />

          <path d="M 0 50 H 100" />

          <path d="M 0 80 H 30 Q 40 80 40 70 V 60 Q 40 50 50 50 H 100" />
        </g>

        {/* Animated Beams (Left to Right Flow) */}

        <g
          className="stroke-red-500 dark:stroke-orange-400/30"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#glow)"
        >
          {/* Top Beam */}

          <motion.path
            d="M 0 20 H 30 Q 40 20 40 30 V 40 Q 40 50 50 50 H 100"
            strokeDasharray="20 100" // Length of the pulse and the gap
            animate={{ strokeDashoffset: [120, -120] }} // Pulls the dash from left to right
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />

          {/* Middle Beam */}

          <motion.path
            d="M 0 50 H 100"
            strokeDasharray="30 100"
            animate={{ strokeDashoffset: [130, -130] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.9 }}
          />

          {/* Bottom Beam */}

          <motion.path
            d="M 0 80 H 30 Q 40 80 40 70 V 60 Q 40 50 50 50 H 100"
            strokeDasharray="20 100"
            animate={{ strokeDashoffset: [120, -120] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />
        </g>

        {/* Anchor Dots */}

        <circle cx="0" cy="20" r="2" className="fill-neutral-300 dark:fill-neutral-600" />

        <circle cx="0" cy="50" r="2" className="fill-neutral-300 dark:fill-neutral-600" />

        <circle cx="0" cy="80" r="2" className="fill-neutral-300 dark:fill-neutral-600" />

        <circle cx="100" cy="50" r="2.5" className="animate-pulse fill-blue-500" />
      </svg>
    </motion.div>
  );
}
