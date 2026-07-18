'use client';

import { cn } from '@/utils/cn';
import { easeInOut } from 'motion';
import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { CiMobile1 } from 'react-icons/ci';
import { FaUserAlt } from 'react-icons/fa';
import { FaLaptopCode } from 'react-icons/fa6';
import { RiAdminLine } from 'react-icons/ri';
import { TbAuth2Fa } from 'react-icons/tb';
import {
  ApiGatewayLogo,
  KafkaLogo,
  NotificationLogo,
  OrderLogo,
  PaymentLogo,
  PostgresLogo,
  RedisLogo,
} from './backend-arch/svgs';

// --- Global Config ---
const BASE_WIDTH = 900;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

// --- Clean Bold Node (No Container Box) ---
const ArchNode = ({
  title,
  subtitle,
  children,
  className,
}: {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.06, y: -2 }}
    transition={{ duration: 0.2 }}
    className={cn(
      'group flex cursor-pointer flex-col items-center justify-center text-center transition-all',
      className,
    )}
  >
    {/* Icon Container */}
    <div className="flex items-center justify-center p-1 opacity-90 transition-transform group-hover:scale-105 group-hover:opacity-100">
      {children}
    </div>

    {/* Title */}
    {title && (
      <span className="mt-2 text-sm font-extrabold tracking-wider text-neutral-200">{title}</span>
    )}

    {/* Subtitle */}
    {subtitle && (
      <span className="mt-0.5 font-mono text-[11px] font-semibold text-neutral-400/80">
        {subtitle}
      </span>
    )}
  </motion.div>
);

// --- Stage Column (No Outer Box) ---
const StageColumn = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div variants={itemVariants} className={cn('flex flex-col items-center gap-6', className)}>
    {/* Stage Header Label */}
    <div className="text-xs font-extrabold tracking-widest text-neutral-400/80 uppercase">
      {title}
    </div>

    {/* Stage Items */}
    <div className="flex flex-col items-center gap-6">{children}</div>
  </motion.div>
);

export default function BackendArchitecture() {
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
      {/* Scaled Architecture Canvas */}
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
          {/* STAGE 1: CLIENT LAYER */}
          <StageColumn title="Client Layer">
            <ArchNode title="Web App" subtitle="React & Next.js">
              <FaLaptopCode size={38} className="text-cyan-400/90" />
            </ArchNode>

            <ArchNode title="Mobile App" subtitle="iOS & Android">
              <CiMobile1 size={40} className="text-neutral-300/90" />
            </ArchNode>

            <ArchNode title="Admin Dashboard" subtitle="Control Panel">
              <RiAdminLine size={36} className="text-amber-400/90" />
            </ArchNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-blue-500/40" />

          {/* STAGE 2: ENTRY POINT / GATEWAY */}
          <StageColumn title="Entry Gateway">
            <ArchNode title="API Gateway" subtitle="Reverse Proxy & Rate Limit">
              <ApiGatewayLogo className="size-12 opacity-90" />
            </ArchNode>

            <ArchNode title="Auth Service" subtitle="OAuth 2.0 & JWT">
              <TbAuth2Fa size={38} className="text-purple-400/90" />
            </ArchNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-purple-500/40" />

          {/* STAGE 3: MICROSERVICES MESH */}
          <StageColumn title="Service Mesh">
            <ArchNode title="User Service" subtitle="Profile & Roles">
              <FaUserAlt size={28} className="text-cyan-400/90" />
            </ArchNode>

            <ArchNode title="Order Service" subtitle="Order Lifecycle">
              <OrderLogo className="size-9 opacity-90" />
            </ArchNode>

            <ArchNode title="Payment Service" subtitle="Transactions">
              <PaymentLogo className="size-9 opacity-90" />
            </ArchNode>

            <ArchNode title="Notification" subtitle="Push & Email">
              <NotificationLogo className="size-9 opacity-90" />
            </ArchNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-emerald-500/40" />

          {/* STAGE 4: DATA & INFRA PIPELINE */}
          <StageColumn title="Data & Infra">
            <ArchNode title="Primary DB" subtitle="PostgreSQL ACID">
              <PostgresLogo className="size-10 opacity-90" />
            </ArchNode>

            <ArchNode title="In-Memory Cache" subtitle="Redis Sessions">
              <RedisLogo className="size-10 opacity-90" />
            </ArchNode>

            <ArchNode title="Event Bus" subtitle="Kafka Streaming">
              <KafkaLogo className="size-10 opacity-90" />
            </ArchNode>
          </StageColumn>
        </motion.div>
      </div>
    </div>
  );
}

// --- Connection Lines ---

function ConnectionLines({ pulseColor = 'stroke-blue-500/40' }: { pulseColor?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative flex h-64 w-20 min-w-20 items-center justify-center overflow-visible"
    >
      <svg
        className="absolute h-full w-full overflow-visible"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Track Wires */}
        <g className="stroke-neutral-800/60" strokeWidth="1.5">
          <path d="M 0 20 H 30 Q 40 20 40 30 V 40 Q 40 50 50 50 H 100" />
          <path d="M 0 50 H 100" />
          <path d="M 0 80 H 30 Q 40 80 40 70 V 60 Q 40 50 50 50 H 100" />
        </g>

        {/* Energy Beams */}
        <g className={pulseColor} strokeWidth="2.5" strokeLinecap="round">
          <motion.path
            d="M 0 20 H 30 Q 40 20 40 30 V 40 Q 40 50 50 50 H 100"
            strokeDasharray="25 75"
            animate={{ strokeDashoffset: [105, -105] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay: 0.2 }}
          />

          <motion.path
            d="M 0 50 H 100"
            strokeDasharray="35 75"
            animate={{ strokeDashoffset: [115, -115] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />

          <motion.path
            d="M 0 80 H 30 Q 40 80 40 70 V 60 Q 40 50 50 50 H 100"
            strokeDasharray="25 75"
            animate={{ strokeDashoffset: [105, -105] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'linear', delay: 0.35 }}
          />
        </g>

        {/* Anchor Dots */}
        <circle cx="0" cy="20" r="2" className="fill-neutral-700" />
        <circle cx="0" cy="50" r="2" className="fill-neutral-700" />
        <circle cx="0" cy="80" r="2" className="fill-neutral-700" />
        <circle cx="100" cy="50" r="2.5" className="fill-neutral-400" />
      </svg>
    </motion.div>
  );
}
