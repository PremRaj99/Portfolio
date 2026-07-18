'use client';

import { motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaReact,
  FaNodeJs,
  FaCreditCard,
  FaMobileAlt,
  FaExchangeAlt,
  FaKey,
  FaEnvelope,
} from 'react-icons/fa';
import { SiRedis, SiStripe, SiNextdotjs, SiGoogleanalytics } from 'react-icons/si';

const BASE_WIDTH = 900;
const BASE_HEIGHT = 480;

// Custom Razorpay Logo Badge
const RazorpayBadge = () => (
  <div className="flex items-center gap-1 text-xs font-extrabold text-blue-400/90">
    <span className="rounded bg-blue-600/90 px-1.5 py-0.5 text-[10px] font-black text-white italic">
      R
    </span>
    <span className="font-extrabold tracking-wide text-blue-400/90">Razorpay</span>
  </div>
);

export default function IntegrationsIllustration() {
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

  // Node Positions (Canvas Coordinates 900x480)
  const nodes = {
    frontend: { x: 160, y: 110, title: 'Next.js App', sub: 'React Frontend' },
    mobile: { x: 160, y: 370, title: 'Mobile App', sub: 'iOS & Android' },
    gateway: { x: 450, y: 240, title: 'API Gateway', sub: 'Node.js & OAuth 2.0' },
    redis: { x: 450, y: 80, title: 'Redis Cache', sub: 'Session & Rate Limit' },
    analytics: { x: 450, y: 400, title: 'Analytics & Mail', sub: 'GA4 & SendGrid' },
    razorpay: { x: 740, y: 110, title: 'Razorpay API', sub: 'Checkout & Webhooks' },
    stripe: { x: 740, y: 370, title: 'Stripe & Worker', sub: 'Subscriptions & Sync' },
  };

  // Subdued Soft-Colored Energy Beams
  const connections = [
    { from: nodes.frontend, to: nodes.gateway, color: 'stroke-cyan-500/40', delay: 0 },
    { from: nodes.gateway, to: nodes.redis, color: 'stroke-red-500/40', delay: 0.4 },
    { from: nodes.gateway, to: nodes.razorpay, color: 'stroke-blue-500/40', delay: 0.2 },
    { from: nodes.gateway, to: nodes.stripe, color: 'stroke-indigo-500/40', delay: 0.6 },
    { from: nodes.redis, to: nodes.razorpay, color: 'stroke-purple-500/40', delay: 0.5 },
    { from: nodes.mobile, to: nodes.gateway, color: 'stroke-cyan-500/30', delay: 0.3 },
    { from: nodes.gateway, to: nodes.analytics, color: 'stroke-amber-500/30', delay: 0.8 },
    { from: nodes.razorpay, to: nodes.stripe, color: 'stroke-blue-500/30', delay: 0.7 },
    { from: nodes.stripe, to: nodes.analytics, color: 'stroke-emerald-500/30', delay: 0.9 },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-transparent"
      style={{ height: `${BASE_HEIGHT * scale}px`, minHeight: '320px' }}
    >
      {/* Scaled Architecture Canvas */}
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
        }}
        className="relative mx-auto flex items-center justify-center"
      >
        {/* SVG Mesh Wire Overlay */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox={`0 0 ${BASE_WIDTH} ${BASE_HEIGHT}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {connections.map((conn, idx) => (
            <g key={idx}>
              {/* Wire Track */}
              <path
                d={`M ${conn.from.x} ${conn.from.y} Q ${(conn.from.x + conn.to.x) / 2} ${(conn.from.y + conn.to.y) / 2 - 15} ${conn.to.x} ${conn.to.y}`}
                className="stroke-neutral-800/60"
                strokeWidth="1.5"
              />

              {/* Energy Beam */}
              <motion.path
                d={`M ${conn.from.x} ${conn.from.y} Q ${(conn.from.x + conn.to.x) / 2} ${(conn.from.y + conn.to.y) / 2 - 15} ${conn.to.x} ${conn.to.y}`}
                className={conn.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="25 80"
                animate={{ strokeDashoffset: [105, -105] }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: conn.delay,
                }}
              />
            </g>
          ))}
        </svg>

        {/* Floating Mesh Nodes */}

        {/* 1. FRONTEND APP */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.frontend.x}px`,
            top: `${nodes.frontend.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.frontend.title} subtitle={nodes.frontend.sub}>
            <div className="flex items-center gap-2">
              <SiNextdotjs size={36} className="text-white" />
              <FaReact size={40} className="text-cyan-400/90" />
            </div>
          </MeshNode>
        </div>

        {/* 2. MOBILE APP */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.mobile.x}px`,
            top: `${nodes.mobile.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.mobile.title} subtitle={nodes.mobile.sub}>
            <FaMobileAlt size={36} className="text-neutral-300/90" />
          </MeshNode>
        </div>

        {/* 3. CENTRAL API GATEWAY */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.gateway.x}px`,
            top: `${nodes.gateway.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.gateway.title} subtitle={nodes.gateway.sub}>
            <div className="flex items-center gap-3">
              <FaNodeJs size={48} className="text-emerald-400/90" />
              <FaKey size={32} className="text-amber-400/90" />
            </div>
          </MeshNode>
        </div>

        {/* 4. REDIS CACHE */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.redis.x}px`,
            top: `${nodes.redis.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.redis.title} subtitle={nodes.redis.sub}>
            <SiRedis size={44} className="text-red-500/90" />
          </MeshNode>
        </div>

        {/* 5. ANALYTICS & MAIL */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.analytics.x}px`,
            top: `${nodes.analytics.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.analytics.title} subtitle={nodes.analytics.sub}>
            <div className="flex items-center gap-2.5">
              <SiGoogleanalytics size={28} className="text-amber-400/90" />
              <FaEnvelope size={26} className="text-blue-400/90" />
            </div>
          </MeshNode>
        </div>

        {/* 6. RAZORPAY API */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.razorpay.x}px`,
            top: `${nodes.razorpay.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.razorpay.title} subtitle={nodes.razorpay.sub}>
            <div className="flex flex-col items-center gap-1">
              <RazorpayBadge />
              <FaCreditCard size={32} className="text-blue-400/90" />
            </div>
          </MeshNode>
        </div>

        {/* 7. STRIPE & WORKER */}
        <div
          style={{
            position: 'absolute',
            left: `${nodes.stripe.x}px`,
            top: `${nodes.stripe.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <MeshNode title={nodes.stripe.title} subtitle={nodes.stripe.sub}>
            <div className="flex items-center gap-2">
              <SiStripe size={40} className="text-indigo-400/90" />
              <FaExchangeAlt size={24} className="text-emerald-400/90" />
            </div>
          </MeshNode>
        </div>
      </div>
    </div>
  );
}

// --- Softened Mesh Node Component ---
function MeshNode({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -2 }}
      transition={{ duration: 0.2 }}
      className="group flex cursor-pointer flex-col items-center text-center"
    >
      <div className="flex items-center justify-center p-1 opacity-90 transition-transform group-hover:scale-105 group-hover:opacity-100">
        {children}
      </div>
      <span className="mt-2 text-sm font-extrabold tracking-wider text-neutral-200">{title}</span>
      <span className="mt-0.5 font-mono text-[11px] font-semibold text-neutral-400/80">
        {subtitle}
      </span>
    </motion.div>
  );
}
