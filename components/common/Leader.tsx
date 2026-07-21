'use client';
import Show_Feast from '@/public/images/Show_Feast.png';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

// Animation utilities
const useInView = (options = {}): [React.RefObject<HTMLDivElement | null>, boolean] => {
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

import { HTMLAttributes, ReactNode } from 'react';

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
          return 'translateX(-20px)';
        case 'right':
          return 'translateX(20px)';
        case 'up':
          return 'translateY(20px)';
        case 'down':
          return 'translateY(-20px)';
        case 'scale':
          return 'scale(0.96)';
        default:
          return 'translateY(20px)';
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
        transition: `all 0.25s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

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

type SkillBadgeProps = {
  skill: string;
  index: number;
  isVisible: boolean;
};

const SkillBadge = ({ skill, index, isVisible }: SkillBadgeProps) => {
  return (
    <span
      className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-white/10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: `all 0.2s ease-out ${index * 30}ms`,
      }}
    >
      {skill}
    </span>
  );
};

export default function ModernJourneyTimeline() {
  const [activeChapter, setActiveChapter] = useState<number | null>(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [floatingParticles, setFloatingParticles] = useState<
    Array<{
      delay: number;
      size: number;
      duration: number;
      x: number;
      y: number;
    }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Generate floating particles only on the client
    const particles = Array.from({ length: 15 }).map((_, i) => ({
      delay: i * 200,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 3000 + 2000,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setFloatingParticles(particles);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mounted]);

  type JourneyItem = {
    id: number;
    chapter: string;
    subtitle: string;
    year: string;
    skills?: string[];
    projects?: string[];
    integrations?: string[];
  };

  const journeyData: JourneyItem[] = [
    {
      id: 1,
      chapter: 'Microservices & Backend Systems',
      subtitle:
        'Designed for high availability, low-latency IPC via Redis, and clean service isolation across distributed Node.js microservices.',
      year: 'Core Focus',
      skills: ['Node.js', 'Express.js', 'Redis', 'PostgreSQL', 'MongoDB', 'Docker'],
      integrations: ['RabbitMQ', 'Prisma ORM', 'JWT Auth'],
    },
    {
      id: 2,
      chapter: 'Full Stack & Real-Time Applications',
      subtitle:
        'Leveraging WebSockets and WebRTC for sub-100ms real-time state synchronization, match clocks, and live interactive media.',
      year: 'Real-Time Apps',
      skills: ['React', 'Next.js', 'TypeScript', 'WebSockets', 'WebRTC', 'Tailwind CSS'],
    },
    {
      id: 3,
      chapter: 'AI SaaS & Event-Driven Architecture',
      subtitle:
        'Building asynchronous ML inference pipelines, background job queues, and multi-tenant SaaS infrastructure.',
      year: 'AI & SaaS',
      skills: ['Python ML', 'AI APIs', 'AWS S3 / EC2', 'Docker', 'Vercel'],
      projects: ['AI Audio Spectrum Classifier', 'PhysioBuddies Multi-Tenant SaaS'],
    },
    {
      id: 4,
      chapter: 'Production Systems & Performance',
      subtitle:
        'Engineered for high-concurrency workloads, indexed database querying (<50ms response), automated CI/CD, and sub-second ISR loads.',
      year: 'Production Focus',
      skills: ['Prisma ORM', 'Stripe & Razorpay', 'CI/CD Pipelines', 'ISR & SSG'],
      projects: ['YogaLife Kolkata Booking Portal', 'High-Concurrency Multiplayer Engine'],
    },
  ];

  return (
    <div className="relative overflow-hidden text-white">
      {/* Floating Particles */}
      {floatingParticles.map((particle, i) => (
        <FloatingParticle
          key={i}
          delay={particle.delay}
          size={particle.size}
          duration={particle.duration}
          x={particle.x}
          y={particle.y}
        />
      ))}

      {/* Mouse Follower - Hidden on mobile */}
      <div
        className="pointer-events-none fixed z-50 hidden h-4 w-4 rounded-full bg-white/20 transition-all duration-300 ease-out md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${activeChapter !== null ? 1.5 : 1})`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <AnimatedDiv className="mb-8 text-center sm:mb-12" delay={0} direction="up">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Image
              src={Show_Feast}
              alt="Signature Element"
              className="h-6 w-6 rounded-full border border-white/10 object-cover"
            />
            <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
              Experience & Milestones
            </span>
          </div>
          <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-4xl">
            Technical Focus & Background
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-400 sm:text-sm">
            My engineering progression across frontend systems, backend services, real-time tools,
            and cloud deployments.
          </p>
        </AnimatedDiv>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            {journeyData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border border-white/10 bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-200 hover:border-orange-500/30 hover:bg-neutral-900/80 sm:p-6 ${
                    activeChapter === index ? 'border-orange-500/40 bg-neutral-900/80' : ''
                  }`}
                  onMouseEnter={() => setActiveChapter(index)}
                  onMouseLeave={() => setActiveChapter(null)}
                >
                  {/* Chapter Header */}
                  <div className="mb-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-0.5 text-xs font-semibold text-orange-400">
                        {item.year}
                      </span>
                      <span className="text-xs text-neutral-500">0{index + 1}</span>
                    </div>
                    <h3 className="mb-1.5 flex items-center gap-2 text-base font-bold text-white sm:text-lg">
                      <Image
                        src={Show_Feast}
                        className="h-5 w-5 rounded-full border border-white/10 object-cover"
                        alt="Signature Element"
                      />
                      <span>{item.chapter}</span>
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-400">{item.subtitle}</p>
                  </div>

                  {/* Skills */}
                  {item.skills && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Technologies & Stack
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill, skillIndex) => (
                          <SkillBadge
                            key={skillIndex}
                            skill={skill}
                            index={skillIndex}
                            isVisible={true}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {item.projects && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Key Work
                      </h4>
                      <ul className="space-y-1">
                        {item.projects.map((project, projIndex) => (
                          <li
                            key={projIndex}
                            className="flex items-start gap-1.5 text-xs text-neutral-300"
                          >
                            <span className="font-bold text-orange-400">•</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Integrations */}
                  {item.integrations && (
                    <div>
                      <h4 className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Integrations
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {item.integrations.map((integration, intIndex) => (
                          <span
                            key={intIndex}
                            className="rounded-md border border-neutral-800 bg-neutral-950/80 px-2 py-0.5 text-[11px] font-medium text-neutral-300"
                          >
                            {integration}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
