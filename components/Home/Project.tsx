'use client';

import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

type ProjectItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tags: string[];
  featured?: boolean;
};

export default function Project() {
  const projects: ProjectItem[] = [
    {
      id: 'physiobuddies',
      title: 'PhysioBuddies',
      description:
        'Healthcare platform for physiotherapy booking, patient recovery tracking, and rehabilitation management.',
      image: '/projects/physiobuddies.png',
      github: 'https://github.com/PremRaj99/physiobuddies-frontend',
      demo: 'https://physiobuddies-frontend.vercel.app',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      featured: true,
    },
    {
      id: 'chess',
      title: 'Real-Time Multiplayer Chess',
      description:
        'Full-stack chess platform with real-time WebSocket move validation, clock timers, and matchmaking.',
      image: '/projects/chess.png',
      github: 'https://github.com/PremRaj99/chess-fronend',
      demo: 'https://chess.premraj.online',
      tags: ['React', 'WebSocket', 'Node.js', 'Tailwind'],
      featured: true,
    },
    {
      id: 'videocall',
      title: 'WebRTC Video & Anonymous Chat',
      description:
        'High-concurrency video conferencing and anonymous chat engine powered by WebRTC and Socket.io.',
      image: '/projects/videocall.png',
      github: 'https://github.com/PremRaj99/Web-RTC-Video-Call',
      demo: 'https://video.premraj.online',
      tags: ['WebRTC', 'Socket.io', 'Node.js', 'React'],
      featured: true,
    },
    {
      id: 'yogalife',
      title: 'YogaLife Kolkata',
      description:
        'Digital web portal for YogaLife Kolkata studio featuring class schedules, instructor profiles, and online booking.',
      image: '/projects/yogalife.png',
      github: 'https://github.com/PremRaj99/Yogalife-Kolkata',
      demo: 'https://www.yogalifekolkata.com/',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
      featured: false,
    },
    {
      id: 'statai',
      title: 'AI Music & Mood Classifier',
      description:
        'Machine learning audio classification engine analyzing frequency spectrums to categorize mood and genre.',
      image:
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/PremRaj99/AI-Music-Mood-Classification',
      tags: ['TypeScript', 'Python', 'ML', 'Next.js'],
      featured: false,
    },
    {
      id: 'snake',
      title: 'Classic Snake Game',
      description:
        'Retro arcade Snake game engineered with React & HTML5 canvas, supporting responsive touch controls and high-score records.',
      image: '/projects/snake.png',
      github: 'https://github.com/PremRaj99/snake-game',
      demo: 'https://snake.premraj.online',
      tags: ['React', 'Vite', 'HTML5 Canvas'],
      featured: false,
    },
    {
      id: 'cyberhunter',
      title: 'Cyber Hunter Platform',
      description:
        'Member registration, event management, and team tracking portal built for the Cyber Hunter club.',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/PremRaj99/Cyber-Hunter-Club-Registration',
      demo: 'https://cyber-hunter-club-registration.vercel.app',
      tags: ['React', 'Node.js', 'Vercel'],
      featured: false,
    },
    {
      id: 'emerginet',
      title: 'EmergiNet Emergency Services',
      description:
        'Location-based road emergency app connecting stranded drivers with nearby towing and repair services.',
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
      github: 'https://github.com/PremRaj99/EmergiNet-Frontend',
      demo: 'https://emergi-net-frontend.vercel.app',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <div className="container my-16 overflow-hidden px-4 sm:px-8">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="font-mono text-xs font-bold tracking-widest text-cyan-400 uppercase">
          Portfolio & Products
        </span>
        <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          Featured Work
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-neutral-400 sm:text-lg">
          Live applications, WebRTC platforms, and interactive products I have designed and
          engineered
        </p>
      </div>

      {/* FEATURED SHOWCASES (Non-Boxy Floating Alternating Layout) */}
      <div className="flex flex-col gap-20">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-8 lg:gap-14 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Floating Website Preview Canvas */}
              <div className="group relative w-full lg:w-3/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/60 shadow-[0_0_50px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                    unoptimized
                  />

                  {/* Browser Window Control Accent */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-md">
                    <span className="size-2.5 rounded-full bg-rose-500/80" />
                    <span className="size-2.5 rounded-full bg-amber-500/80" />
                    <span className="size-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Content Info (No Box Container) */}
              <div className="flex w-full flex-col items-start lg:w-2/5">
                <span className="font-mono text-xs font-bold tracking-widest text-cyan-400 uppercase">
                  Featured Project 0{index + 1}
                </span>

                <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-neutral-800/80 bg-neutral-900/80 px-3 py-1 font-mono text-[11px] font-semibold text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-extrabold text-black shadow-lg transition-all hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]"
                    >
                      <span>Visit Live Website</span>
                      <FiExternalLink size={16} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/90 px-5 py-3 text-sm font-semibold text-neutral-200 transition-all hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
                  >
                    <FiGithub size={16} />
                    <span>View Source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SECONDARY PROJECTS GRID (Subtle & Non-Boxy) */}
      <div className="mt-24">
        <h3 className="mb-8 text-center text-xl font-extrabold text-white sm:text-2xl">
          More Built Applications
        </h3>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {secondaryProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/40 p-0 transition-all duration-300 hover:border-cyan-500/40 hover:bg-neutral-950/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Image Preview */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h4 className="text-lg font-bold text-white transition-colors group-hover:text-cyan-300">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Tech Tags */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded border border-neutral-800 bg-neutral-900/90 px-2 py-0.5 font-mono text-[9px] font-medium text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 border-t border-neutral-800/80 pt-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={12} />
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
                    >
                      <FiGithub size={12} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
