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
          return 'translateX(-100px)';
        case 'right':
          return 'translateX(100px)';
        case 'up':
          return 'translateY(50px)';
        case 'down':
          return 'translateY(-50px)';
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
      className="cursor-pointer rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `all 0.5s ease-out ${index * 100}ms`,
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

  const journeyData = [
    {
      id: 1,
      chapter: 'Learned core web fundamentals',
      subtitle: 'Built static + interactive UIs with real constraints.',
      year: 'Foundation',
      skills: ['HTML', 'CSS', 'JavaScript Basics'],
    },
    {
      id: 2,
      chapter: 'Moved into React + Node.js',
      subtitle: 'Designed APIs, auth systems, payment flows.',
      year: 'Full-Stack Shift',
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs'],
      projects: ['Cyber Hunter Team Management', 'Emerginet Road Emergency Service'],
    },
    {
      id: 3,
      chapter: 'Built production-grade apps',
      subtitle: 'Integrated maps, payments, real-time updates, AWS deployment.',
      year: 'Real-World Projects',
      skills: ['AWS EC2', 'S3', 'VPC', 'Elastic IP', 'Route 53', 'Cloud Architecture'],
      integrations: ['OLAMAP', 'Google Maps', 'Razorpay', 'Cashfree', 'PhonePe', 'UPI Tranzact'],
    },
    {
      id: 4,
      chapter: 'Freelancing + building scalable systems',
      subtitle: (
        <span className="text-green-500">
          Actively seeking internship / junior full-stack roles.
        </span>
      ),
      year: 'Now',
      projects: [
        'Physiobuddies: A platform for physiotherapy management',
        "Busan Official Website: India's Trusted Gaming Top-Up Hub",
      ],
    },
  ];

  return (
    <div className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-8">
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
        <AnimatedDiv className="mb-12 text-center" delay={0} direction="up">
          <h1 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            From Learning Code to Shipping Real Systems
          </h1>
          <p className="text-base text-gray-400">
            From curiosity to expertise - a story of continuous growth
          </p>
        </AnimatedDiv>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="grid gap-8 md:grid-cols-2">
            {journeyData.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`transform cursor-pointer rounded-xl border border-white/10 bg-white/10 p-4 shadow-lg backdrop-blur-sm transition-all duration-500 hover:scale-101 hover:bg-white/15 sm:p-6 ${
                    activeChapter === index ? 'scale-105 bg-white/15' : ''
                  }`}
                  onMouseEnter={() => setActiveChapter(index)}
                  onMouseLeave={() => setActiveChapter(null)}
                >
                  {/* Chapter Header */}
                  <div className="mb-4">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs font-medium text-gray-300">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="mb-1 flex items-center gap-1 text-lg font-bold text-white sm:text-xl">
                      <Image src={Show_Feast} className="h-8 w-8" alt="" />
                      {item.chapter}
                    </h3>
                    <p className="text-sm text-gray-400 italic">&quot;{item.subtitle}&quot;</p>
                  </div>

                  {/* Skills */}
                  {item.skills && (
                    <div className="mb-3">
                      <h4 className="mb-2 text-xs font-semibold text-gray-400">
                        Technologies & Skills
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
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
                    <div className="mb-3">
                      <h4 className="mb-2 text-xs font-semibold text-gray-400">Key Projects</h4>
                      <ul className="space-y-1">
                        {item.projects.map((project, projIndex) => (
                          <li
                            key={projIndex}
                            className="text-xs text-gray-300 transition-all duration-300 hover:text-white"
                          >
                            • {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Integrations */}
                  {item.integrations && (
                    <div>
                      <h4 className="mb-2 text-xs font-semibold text-gray-400">Integrations</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {item.integrations.map((integration, intIndex) => (
                          <span
                            key={intIndex}
                            className="rounded border border-white/10 bg-white/5 px-2 py-1 text-xs text-gray-400 transition-all duration-300 hover:bg-white/10"
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
