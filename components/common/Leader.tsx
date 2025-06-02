"use client";
import Show_Feast from "@/public/images/Show_Feast.png";
import {
  Cloud,
  Code,
  Rocket,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Animation utilities
const useInView = (
  options = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
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

import { ReactNode, HTMLAttributes } from "react";

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
        case "down":
          return "translateY(-50px)";
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

type SkillBadgeProps = {
  skill: string;
  index: number;
  isVisible: boolean;
};

const SkillBadge = ({ skill, index, isVisible }: SkillBadgeProps) => {
  return (
    <span
      className="px-3 py-1 text-xs bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const journeyData = [
    {
      id: 1,
      chapter: "The Spark",
      subtitle: "It all started with curiosity.",
      icon: Sparkles,
      year: "Early B.Tech",
      description:
        "I discovered web development in my early B.Tech days. A basic HTML page turned into a passion for building.",
      skills: ["HTML", "CSS", "JavaScript Basics"],
    },
    {
      id: 2,
      chapter: "The Builder's Path",
      subtitle: "From static pages to dynamic dreams.",
      icon: Code,
      year: "Mid B.Tech",
      description:
        "I learned React, Node, and Express to build full-stack apps and real-world projects.",
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
      projects: [
        "Cyber Hunter Team Management",
        "Emerginet Road Emergency Service",
      ],
    },
    {
      id: 3,
      chapter: "Adding Motion to the Web",
      subtitle: "Make it move. Make it memorable.",
      icon: Zap,
      year: "Advanced Learning",
      description:
        "I explored GSAP and Framer Motion to add smooth, interactive animations.",
      skills: ["GSAP", "Framer Motion", "Advanced CSS", "UI/UX Design"],
    },
    {
      id: 4,
      chapter: "Into the Cloud",
      subtitle: "From localhost to global host.",
      icon: Cloud,
      year: "Cloud Journey",
      description:
        "I deployed projects using AWS services and learned cloud infrastructure basics.",
      skills: [
        "AWS EC2",
        "S3",
        "VPC",
        "Elastic IP",
        "Route 53",
        "Cloud Architecture",
      ],
    },
    {
      id: 5,
      chapter: "Connected World",
      subtitle: "No app is an island.",
      icon: Users,
      year: "Integration Phase",
      description:
        "I integrated APIs for maps, auth, and payments to enhance usability.",
      skills: [
        "API Integration",
        "OAuth",
        "Payment Gateways",
        "Firebase",
        "Third-party Services",
      ],
      integrations: [
        "OLAMAP",
        "Google Maps",
        "Razorpay",
        "Cashfree",
        "PhonePe",
        "UPI Tranzact",
      ],
    },
    {
      id: 6,
      chapter: "Freelance Fire",
      subtitle: "Real clients. Real problems. Real impact.",
      icon: Rocket,
      year: "Professional Work",
      description:
        "As a freelancer, I built solutions for clients and delivered projects on time.",
      skills: [
        "Client Management",
        "Project Delivery",
        "Quality Assurance",
        "Deadline Management",
      ],
    },
    {
      id: 7,
      chapter: "The Next Mission",
      subtitle: "Looking for a team to grow with.",
      icon: Target,
      year: "Future Goals",
      description:
        "I’m now looking for an internship or job to grow with a team and build impactful products.",
      skills: [
        "Full-stack Development",
        "Team Collaboration",
        "Continuous Learning",
        "Innovation",
      ],
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Floating Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <FloatingParticle
          key={i}
          delay={i * 200}
          size={Math.random() * 6 + 3}
          duration={Math.random() * 3000 + 2000}
          x={Math.random() * 100}
          y={Math.random() * 100}
        />
      ))}

      {/* Mouse Follower - Hidden on mobile */}
      <div
        className="fixed w-4 h-4 bg-white/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${activeChapter !== null ? 1.5 : 1})`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-12" delay={0} direction="up">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            My Technical Journey
          </h1>
          <p className="text-base text-gray-400">
            From curiosity to expertise - a story of continuous growth
          </p>
        </AnimatedDiv>

        {/* Timeline Container */}
        <div className="relative">
          <AnimatedDiv
            className="absolute md:left-1/2 left-6 md:transform md:-translate-x-1/2 w-px h-full bg-white/20"
            delay={200}
            direction="scale"
          >
          </AnimatedDiv>

          {/* Timeline Items */}
          <div className="space-y-8 sm:space-y-12">
            {journeyData.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <AnimatedDiv
                  key={item.id}
                  className="relative flex items-center justify-start"
                  delay={index * 150}
                  direction={isLeft ? "left" : "right"}
                >
                  {/* Timeline Node */}
                  <AnimatedDiv
                    className="absolute md:left-1/2 left-6 md:transform md:-translate-x-1/2 -translate-x-1/2 z-10"
                    delay={index * 150 + 75}
                    direction="scale"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transform transition-all duration-500 hover:scale-110 cursor-pointer flex items-center justify-center ${
                        activeChapter === index ? "scale-110 bg-white/20" : ""
                      }`}
                      onMouseEnter={() => setActiveChapter(index)}
                      onMouseLeave={() => setActiveChapter(null)}
                    >
                      <IconComponent
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-all duration-300"
                        style={{
                          transform:
                            activeChapter === index
                              ? "rotate(360deg) scale(1.1)"
                              : "rotate(0deg) scale(1)",
                        }}
                      />
                    </div>
                  </AnimatedDiv>

                  {/* Content Card */}
                  <div
                    className={`
                    w-full
                    md:w-5/12
                    pl-16 md:pl-0
                    ${isLeft ? "md:pr-12" : "md:pl-12 md:ml-auto"}
                  `}
                  >
                    <div
                      className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer ${
                        activeChapter === index ? "scale-105 bg-white/15" : ""
                      }`}
                      onMouseEnter={() => setActiveChapter(index)}
                      onMouseLeave={() => setActiveChapter(null)}
                    >
                      {/* Chapter Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/10">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 flex items-center gap-1">
                          <Image src={Show_Feast} className="w-8 h-8" alt="" />
                          {item.chapter}
                        </h3>
                        <p className="text-gray-400 italic text-sm">
                          &quot;{item.subtitle}&quot;
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                        {item.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-3">
                        <h4 className="text-xs font-semibold text-gray-400 mb-2">
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

                      {/* Projects */}
                      {item.projects && (
                        <div className="mb-3">
                          <h4 className="text-xs font-semibold text-gray-400 mb-2">
                            Key Projects
                          </h4>
                          <ul className="space-y-1">
                            {item.projects.map((project, projIndex) => (
                              <li
                                key={projIndex}
                                className="text-gray-300 text-xs transition-all duration-300 hover:text-white"
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
                          <h4 className="text-xs font-semibold text-gray-400 mb-2">
                            Integrations
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {item.integrations.map((integration, intIndex) => (
                              <span
                                key={intIndex}
                                className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded text-gray-400 transition-all duration-300 hover:bg-white/10"
                              >
                                {integration}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </AnimatedDiv>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
