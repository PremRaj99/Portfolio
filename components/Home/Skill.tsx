'use client';
import { useEffect, useRef, useState } from 'react';
import type { RefObject, HTMLAttributes, ReactNode } from 'react';
// Ensure this path matches your project
import FrontendIllustration from '../illustration/responsive';
import BackendArchitecture from '../illustration/backend-architecture';

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
  title: string;
  description: string;
  stack: string;
  screen: ReactNode;
};

const roles: Role[] = [
  {
    title: 'Frontend Engineering',
    description: 'Building pixel-perfect, interactive web apps that look great on any device.',
    stack: 'React, Next.js, Tailwind, Motion',
    screen: (
      <div className="absolute inset-y-0 left-0 w-[170%] transition-all duration-500 md:w-full">
        <FrontendIllustration />
      </div>
    ),
  },
  {
    title: 'Backend Architecture',
    description:
      'Creating the secure logic and fast APIs that power your application behind the scenes.',
    stack: 'Node.js, Postgres, Auth, Security',
    screen: (
      <div className="absolute inset-0 inset-y-0 left-0 w-[500px] transition-all duration-500 md:w-full">
        <BackendArchitecture />
      </div>
    ),
  },
  {
    title: 'Data & Performance',
    description: 'Structuring data so it loads instantly and scales as you grow.',
    stack: 'SQL, NoSQL, Redis, Caching',
    screen: <></>,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Ensuring your website stays online, secure, and runs smoothly 24/7.',
    stack: 'AWS, Vercel, Docker, CI/CD',
    screen: <></>,
  },
  {
    title: 'Integrations',
    description: 'Seamlessly connecting payments, analytics, and external tools to your business.',
    stack: 'Stripe, PayPal, Google Analytics',
    screen: <></>,
  },
];

export default function ModernSkills() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black px-4 py-8 text-white sm:px-8">
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
        <AnimatedDiv className="mb-12 text-center" delay={0} direction="up">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Technical Skills</h1>
          <p className="mb-8 text-gray-400">
            My expertise across different technologies and frameworks
          </p>
        </AnimatedDiv>

        <div className="grid w-full gap-8 overflow-hidden md:grid-cols-2">
          {roles.map((role: Role, index) => (
            <AnimatedDiv
              key={index}
              className="container flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4"
              delay={index * 50}
            >
              <div className="flex flex-col gap-2 overflow-hidden">
                <div className="relative h-[60%] min-h-72 w-full min-w-60">{role.screen}</div>

                <h2 className="mt-2 text-2xl font-bold">{role.title}</h2>
                <p className="mb-2 text-sm text-gray-500">{role.description}</p>

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
    </div>
  );
}
