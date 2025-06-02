"use client";
import {
  Code,
  Database,
  Globe,
  Layers,
  Server,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Animation utilities
import type { RefObject } from "react";

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

const FloatingParticle = ({ delay, size, duration, x, y }: FloatingParticleProps) => {
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

type SkillCardProps = {
  skill: { name: string; level: string; category: string };
  index: number;
  mousePosition: { x: number; y: number };
};

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "from-emerald-500 to-teal-500";
      case "Intermediate":
        return "from-blue-500 to-cyan-500";
      case "Beginner":
        return "from-orange-500 to-yellow-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case "Advanced":
        return "90%";
      case "Intermediate":
        return "70%";
      case "Beginner":
        return "40%";
      default:
        return "50%";
    }
  };

  const getIcon = (skillName: string) => {
    const name = skillName.toLowerCase();
    if (name.includes("react") || name.includes("next")) return Code;
    if (name.includes("mongo") || name.includes("database")) return Database;
    if (name.includes("html") || name.includes("css")) return Globe;
    if (name.includes("node") || name.includes("express")) return Server;
    if (name.includes("javascript")) return Zap;
    return Layers;
  };

  const IconComponent = getIcon(skill.name);

  return (
    <AnimatedDiv
      className="group relative"
      delay={index * 100}
      direction={index % 2 === 0 ? "left" : "right"}
    >
      <div
        className={`bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 hover:bg-white/15 cursor-pointer relative overflow-hidden ${
          isHovered ? "scale-105 bg-white/15" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow effect on hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${getLevelColor(
            skill.level
          )} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl`}
        />

        {/* Skill Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg bg-gradient-to-r ${getLevelColor(
                skill.level
              )} bg-opacity-20`}
            >
              <IconComponent className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-white">{skill.name}</h3>
          </div>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getLevelColor(
              skill.level
            )} text-white shadow-lg`}
          >
            {skill.level}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-white/10 rounded-full h-2 mb-2">
            <div
              className={`h-full bg-gradient-to-r ${getLevelColor(
                skill.level
              )} rounded-full transition-all duration-1000 ease-out shadow-lg`}
              style={{
                width: isHovered ? getLevelWidth(skill.level) : "0%",
              }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400">
            <span>Proficiency</span>
            <span>{skill.level}</span>
          </div>
        </div>

        {/* Floating particles inside card on hover */}
        {isHovered && (
          <>
            <FloatingParticle
              delay={0}
              size={3}
              duration={2000}
              x={20}
              y={20}
            />
            <FloatingParticle
              delay={500}
              size={2}
              duration={1500}
              x={80}
              y={30}
            />
            <FloatingParticle
              delay={1000}
              size={4}
              duration={2500}
              x={60}
              y={70}
            />
          </>
        )}
      </div>
    </AnimatedDiv>
  );
};

export default function ModernSkills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "JavaScript", level: "Advanced", category: "frontend" },
    { name: "React", level: "Advanced", category: "frontend" },
    { name: "Next.js", level: "Intermediate", category: "frontend" },
    { name: "Node.js", level: "Intermediate", category: "backend" },
    { name: "Express.js", level: "Intermediate", category: "backend" },
    { name: "MongoDB", level: "Intermediate", category: "database" },
    { name: "HTML", level: "Advanced", category: "frontend" },
    { name: "CSS", level: "Advanced", category: "frontend" },
  ];

  const categories = [
    { id: "all", name: "All Skills", icon: Sparkles },
    { id: "frontend", name: "Frontend", icon: Globe },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "design", name: "Design", icon: Star },
    { id: "cloud", name: "Cloud", icon: Layers },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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

      {/* Mouse Follower */}
      <div
        className="fixed w-4 h-4 bg-white/20 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${activeCategory !== "all" ? 1.5 : 1})`,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-12" delay={0} direction="up">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h1>
          <p className="text-gray-400 mb-8">
            My expertise across different technologies and frameworks
          </p>
        </AnimatedDiv>

        {/* Category Filter */}
        <AnimatedDiv
          className="flex flex-wrap justify-center gap-3 mb-12"
          delay={200}
          direction="up"
        >
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? "bg-white text-black shadow-lg"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </button>
            );
          })}
        </AnimatedDiv>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              mousePosition={mousePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
