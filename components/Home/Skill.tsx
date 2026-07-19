'use client';

import type { HTMLAttributes, ReactNode, RefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoExpandOutline } from 'react-icons/io5';
import Image from 'next/image';
import Show_Yo from '@/public/images/Show_Yo.png';

import BackendArchitecture from '../illustration/backend-architecture';
import FrontendIllustration from '../illustration/responsive';
import DataAndPerformance from '../illustration/data-and-performance';
import CloudAndDevOps from '../illustration/cloud-and-devops';
import IntegrationsIllustration from '../illustration/integrations';

// --- Animation Hook ---
const useInView = (options = {}): [RefObject<HTMLDivElement | null>, boolean] => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

// --- Animated Wrapper ---
type AnimatedDivProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
} & HTMLAttributes<HTMLDivElement>;

const AnimatedDiv = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  ...props
}: AnimatedDivProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const getTransform = () => {
    if (!hasAnimated) {
      switch (direction) {
        case 'left':
          return 'translateX(-100px)';
        case 'right':
          return 'translateX(100px)';
        case 'up':
          return 'translateY(50px)';
        case 'scale':
          return 'scale(0.8)';
        default:
          return 'translateY(50px)';
      }
    }
    return 'translateX(0) translateY(0) scale(1)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: getTransform(),
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// --- Background Particles ---
type FloatingParticleProps = {
  delay: number;
  size: number;
  duration: number;
  x: number;
  y: number;
};

const FloatingParticle = ({ delay, size, duration, x, y }: FloatingParticleProps) => {
  return (
    <div
      className="absolute animate-pulse rounded-full bg-white/5"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    />
  );
};

// --- Data ---
type Role = {
  id: string;
  title: string;
  description: string;
  stack: string;
  screen: ReactNode;
};

const roles: Role[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Building pixel-perfect, interactive web apps that look great on any device.',
    stack: 'React, Next.js, Tailwind, Motion',
    screen: (
      <div className="absolute inset-0 flex w-full items-center justify-center transition-all duration-500">
        <FrontendIllustration />
      </div>
    ),
  },
  {
    id: 'backend',
    title: 'Backend Architecture',
    description:
      'Creating the secure logic and fast APIs that power your application behind the scenes.',
    stack: 'Node.js, Postgres, Auth, Security',
    screen: (
      <div className="absolute inset-0 flex w-full items-center justify-center transition-all duration-500">
        <BackendArchitecture />
      </div>
    ),
  },
  {
    id: 'data',
    title: 'Data & Performance',
    description: 'Structuring data so it loads instantly and scales as you grow.',
    stack: 'SQL, NoSQL, Redis, Caching',
    screen: (
      <div className="absolute inset-0 flex w-full items-center justify-center transition-all duration-500">
        <DataAndPerformance />
      </div>
    ),
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Ensuring your website stays online, secure, and runs smoothly 24/7.',
    stack: 'AWS, Vercel, Docker, CI/CD',
    screen: (
      <div className="absolute inset-0 flex w-full items-center justify-center transition-all duration-500">
        <CloudAndDevOps />
      </div>
    ),
  },
  {
    id: 'integrations',
    title: 'Integrations',
    description: 'Seamlessly connecting payments, analytics, and external tools to your business.',
    stack: 'Stripe, Razorpay, Redis, Google Analytics',
    screen: (
      <div className="absolute inset-0 flex w-full items-center justify-center transition-all duration-500">
        <IntegrationsIllustration />
      </div>
    ),
  },
];

export default function ModernSkills() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedRole(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative overflow-hidden text-white">
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 200}
          size={Math.random() * 6 + 3}
          duration={Math.random() * 3000 + 2000}
          x={Math.random() * 100}
          y={Math.random() * 100}
        />
      ))}

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <AnimatedDiv
          className="mb-8 flex flex-col items-center text-center sm:mb-12"
          delay={0}
          direction="up"
        >
          <div className="mb-2 flex items-center gap-2">
            <Image
              src={Show_Yo}
              alt="Signature Element"
              className="h-7 w-7 rounded-full border border-white/10 object-cover"
            />
            <span className="font-mono text-xs font-bold tracking-widest text-orange-400 uppercase">
              Architecture & Stack
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Technical Skills
          </h2>
          <p className="mt-2 text-xs text-neutral-400 sm:text-sm">
            Click on any architecture illustration to view it in full screen
          </p>
        </AnimatedDiv>

        {/* Skill Cards Grid */}
        <div className="grid w-full gap-5 overflow-hidden sm:gap-8 md:grid-cols-2">
          {roles.map((role: Role, index) => (
            <AnimatedDiv
              key={role.id}
              className="group relative container flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6"
              delay={index * 50}
            >
              <div className="flex flex-col gap-2 overflow-hidden">
                {/* Architecture Canvas (Click to Pop Out Architecture) */}
                <div
                  onClick={() => setSelectedRole(role)}
                  className="group/canvas relative h-56 w-full cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 sm:h-64 md:h-72"
                  title={`Click to expand ${role.title} Architecture`}
                >
                  {/* Expand Hint Overlay (Monochrome) */}
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1 rounded-full border border-neutral-700/80 bg-neutral-900/80 px-2.5 py-1 font-mono text-[10px] text-neutral-300 opacity-70 backdrop-blur-md transition-all group-hover/canvas:border-neutral-400 group-hover/canvas:bg-neutral-800 group-hover/canvas:text-white group-hover/canvas:opacity-100">
                    <IoExpandOutline size={12} />
                    <span>Expand Architecture</span>
                  </div>

                  {role.screen}
                </div>

                <h2 className="mt-2 text-2xl font-bold">{role.title}</h2>
                <p className="mb-2 text-sm text-gray-400">{role.description}</p>

                {/* Tech Stack Pills */}
                <div className="item-center flex flex-wrap gap-2">
                  {role.stack.split(',').map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium tracking-wider text-gray-300 uppercase"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>

      {/* Pure Architecture Pop-Out (NO Outer Box Container) */}
      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl sm:p-8"
            onClick={() => setSelectedRole(null)}
          >
            {/* Close Button Floating in Top Right */}
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-6 right-6 z-50 flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-neutral-900/90 px-3.5 py-1.5 font-mono text-xs text-neutral-200 shadow-xl backdrop-blur-md transition-colors hover:bg-white/20 hover:text-white"
              aria-label="Close Fullscreen View"
            >
              <IoClose size={18} />
              <span>Close (ESC)</span>
            </button>

            {/* Floating Architecture Canvas Direct Mount (NO Container Box / Border) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative flex aspect-video h-[80vh] max-h-[90vh] w-full max-w-6xl items-center justify-center overflow-hidden p-2 sm:p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedRole.screen}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
