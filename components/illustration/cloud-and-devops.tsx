'use client';

import { cn } from '@/utils/cn';
import { easeInOut } from 'motion';
import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import { FaAws, FaDocker, FaGithub, FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { SiVercel, SiKubernetes, SiTerraform, SiNginx } from 'react-icons/si';
import { IoPulse } from 'react-icons/io5';

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

// --- Clean Bold Node with Softened Contrast ---
const BoldNode = ({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
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
      <span className="mt-2 text-sm font-extrabold tracking-wider text-neutral-200">{title}</span>

      {/* Subtitle */}
      {subtitle && (
        <span className="mt-0.5 font-mono text-[11px] font-semibold text-neutral-400/80">
          {subtitle}
        </span>
      )}
    </motion.div>
  );
};

// --- Stage Column ---
const StageColumn = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className={cn('flex flex-col items-center gap-7', className)}
    >
      {/* Stage Header Label */}
      <div className="text-xs font-extrabold tracking-widest text-neutral-400/80 uppercase">
        {title}
      </div>

      {/* Stage Items */}
      <div className="flex flex-col items-center gap-7">{children}</div>
    </motion.div>
  );
};

export default function CloudAndDevOps() {
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
          {/* STAGE 1: SOURCE & IAC */}
          <StageColumn title="Source & IaC">
            <BoldNode title="Git Push" subtitle="GitHub Actions">
              <FaGithub size={44} className="text-white" />
            </BoldNode>

            <BoldNode title="Terraform" subtitle="Infra as Code">
              <SiTerraform size={38} className="text-purple-400/90" />
            </BoldNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-cyan-500/50" />

          {/* STAGE 2: CI/CD PIPELINE */}
          <StageColumn title="CI/CD Engine">
            <BoldNode title="Docker" subtitle="OCI Image Build">
              <FaDocker size={44} className="text-orange-400/90" />
            </BoldNode>

            <BoldNode title="Automated Test" subtitle="148/148 Passed">
              <FaCheckCircle size={38} className="text-emerald-400/90" />
            </BoldNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-purple-500/50" />

          {/* STAGE 3: INGRESS & SECURITY */}
          <StageColumn title="Edge & Security">
            <BoldNode title="Cloudflare WAF" subtitle="DDoS Protection">
              <FaShieldAlt size={40} className="text-amber-400/90" />
            </BoldNode>

            <BoldNode title="NGINX Ingress" subtitle="TLS 1.3 SSL">
              <SiNginx size={38} className="text-emerald-400/90" />
            </BoldNode>
          </StageColumn>

          <ConnectionLines pulseColor="stroke-emerald-500/50" />

          {/* STAGE 4: CLOUD MESH & OPS */}
          <StageColumn title="Cloud & Ops">
            <BoldNode title="AWS EKS" subtitle="K8s Cluster">
              <div className="flex items-center gap-2.5">
                <FaAws size={34} className="text-amber-400/90" />
                <SiKubernetes size={28} className="text-indigo-400/90" />
              </div>
            </BoldNode>

            <BoldNode title="Vercel Edge" subtitle="Global CDN">
              <SiVercel size={30} className="text-white" />
            </BoldNode>

            <BoldNode title="Prometheus" subtitle="99.99% SLA">
              <IoPulse size={34} className="animate-pulse text-emerald-400/90" />
            </BoldNode>
          </StageColumn>
        </motion.div>
      </div>
    </div>
  );
}

// --- Connection Wires ---

function ConnectionLines({ pulseColor = 'stroke-cyan-500/50' }: { pulseColor?: string }) {
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
        <g className="stroke-neutral-800/80" strokeWidth="2">
          <path d="M 0 25 H 35 Q 45 25 45 35 V 45 Q 45 50 55 50 H 100" />
          <path d="M 0 50 H 100" />
          <path d="M 0 75 H 35 Q 45 75 45 65 V 55 Q 45 50 55 50 H 100" />
        </g>

        {/* Energy Pulse Beams */}
        <g className={pulseColor} strokeWidth="2.5" strokeLinecap="round">
          <motion.path
            d="M 0 25 H 35 Q 45 25 45 35 V 45 Q 45 50 55 50 H 100"
            strokeDasharray="25 75"
            animate={{ strokeDashoffset: [100, -100] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.2 }}
          />

          <motion.path
            d="M 0 50 H 100"
            strokeDasharray="35 75"
            animate={{ strokeDashoffset: [110, -110] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.5 }}
          />

          <motion.path
            d="M 0 75 H 35 Q 45 75 45 65 V 55 Q 45 50 55 50 H 100"
            strokeDasharray="25 75"
            animate={{ strokeDashoffset: [100, -100] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: 0.35 }}
          />
        </g>

        {/* Anchor Dots */}
        <circle cx="0" cy="25" r="2.5" className="fill-neutral-700" />
        <circle cx="0" cy="50" r="2.5" className="fill-neutral-700" />
        <circle cx="0" cy="75" r="2.5" className="fill-neutral-700" />
        <circle cx="100" cy="50" r="3" className="fill-neutral-400" />
      </svg>
    </motion.div>
  );
}
