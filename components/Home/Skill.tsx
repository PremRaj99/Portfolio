"use client";
import { useEffect, useRef, useState } from "react";
import type { RefObject, HTMLAttributes, ReactNode } from "react";
// Ensure this path matches your project
import FrontendIllustration from "../illustration/responsive";

// --- Animation Hook ---
const useInView = (
  options = {},
): [RefObject<HTMLDivElement | null>, boolean] => {
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
  direction?: "up" | "down" | "left" | "right" | "scale";
} & HTMLAttributes<HTMLDivElement>;

const AnimatedDiv = ({
  children,
  className,
  delay = 0,
  direction = "up",
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
        case "left":
          return "translateX(-100px)";
        case "right":
          return "translateX(100px)";
        case "up":
          return "translateY(50px)";
        case "scale":
          return "scale(0.8)";
        default:
          return "translateY(50px)";
      }
    }
    return "translateX(0) translateY(0) scale(1)";
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

const FloatingParticle = ({
  delay,
  size,
  duration,
  x,
  y,
}: FloatingParticleProps) => {
  return (
    <div
      className="absolute rounded-full bg-white/5 animate-pulse"
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
    title: "Frontend Engineering",
    description:
      "Building pixel-perfect, interactive web apps that look great on any device.",
    stack: "React, Next.js, Tailwind, Motion",
    screen: <FrontendIllustration />,
  },
  {
    title: "Backend Architecture",
    description:
      "Creating the secure logic and fast APIs that power your application behind the scenes.",
    stack: "Node.js, Postgres, Auth, Security",
    screen: <></>,
  },
  {
    title: "Data & Performance",
    description:
      "Structuring data so it loads instantly and scales as you grow.",
    stack: "SQL, NoSQL, Redis, Caching",
    screen: <></>,
  },
  {
    title: "Cloud & DevOps",
    description:
      "Ensuring your website stays online, secure, and runs smoothly 24/7.",
    stack: "AWS, Vercel, Docker, CI/CD",
    screen: <></>,
  },
  {
    title: "Integrations",
    description:
      "Seamlessly connecting payments, analytics, and external tools to your business.",
    stack: "Stripe, PayPal, Google Analytics",
    screen: <></>,
  },
];

export default function ModernSkills() {
  return (
    <div className="bg-black text-white py-8 px-4 sm:px-8 relative overflow-hidden min-h-screen">
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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-12" delay={0} direction="up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-400 mb-8">
            My expertise across different technologies and frameworks
          </p>
        </AnimatedDiv>

        <div className="w-full grid md:grid-cols-2 gap-8 overflow-hidden">
          {roles.map((role: Role, index) => (
            <AnimatedDiv
              key={index}
              className="flex flex-col gap-4 container p-4 bg-white/5 rounded-3xl border border-white/10 overflow-hidden"
              delay={index * 50}
            >
              <div className="flex flex-col gap-2 overflow-hidden">
                <div className="min-h-60 h-[60%] w-[55%] min-w-60 sm:h-65 sm:w-65 md:h-72 md:w-120 relative">
                  <div className="absolute inset-y-0 left-0 w-[170%] md:w-full transition-all duration-500">
                    {role.screen}
                  </div>
                </div>

                <h2 className="text-2xl font-bold mt-2">{role.title}</h2>
                <p className="text-gray-500 text-sm mb-2">{role.description}</p>
                
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 item-center">
                  {role.stack.split(",").map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 border border-white/10 text-gray-300 px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-medium"
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