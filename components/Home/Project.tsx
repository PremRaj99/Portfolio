'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Show_Feast from '@/public/images/Show_Feast.png';

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

const projects: ProjectItem[] = [
  {
    id: 'statai',
    title: 'AI Music & Mood Classification SaaS',
    description:
      'Production AI SaaS engine analyzing audio frequency spectrums with machine learning models for automated mood categorization, user dashboards, and API access.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/AI-Music-Mood-Classification',
    tags: ['AI SaaS', 'Python ML', 'Next.js', 'TypeScript', 'REST API'],
    featured: true,
  },
  {
    id: 'yogalife',
    title: 'YogaLife Kolkata E-Commerce & Booking',
    description:
      'High-converting studio storefront and booking portal with automated class schedules, instructor profiles, customer accounts, and online payment integrations.',
    image: '/projects/yogalife.png',
    github: 'https://github.com/PremRaj99/Yogalife-Kolkata',
    demo: 'https://www.yogalifekolkata.com/',
    tags: ['E-Commerce', 'Next.js', 'React', 'Payment Gateway', 'Tailwind'],
    featured: true,
  },
  {
    id: 'physiobuddies',
    title: 'PhysioBuddies B2B Healthcare SaaS',
    description:
      'Multi-tenant healthcare SaaS platform for online physiotherapy appointment bookings, patient recovery tracking, subscription plans, and practitioner analytics.',
    image: '/projects/physiobuddies.png',
    github: 'https://github.com/PremRaj99/physiobuddies-frontend',
    demo: 'https://physiobuddies-frontend.vercel.app',
    tags: ['B2B SaaS', 'React', 'Node.js', 'Express', 'MongoDB'],
    featured: true,
  },
  {
    id: 'videocall',
    title: 'WebRTC Video & Real-Time Chat Platform',
    description:
      'High-concurrency video conferencing and anonymous real-time chat engine powered by WebRTC and Socket.io.',
    image: '/projects/videocall.png',
    github: 'https://github.com/PremRaj99/Web-RTC-Video-Call',
    demo: 'https://video.premraj.online',
    tags: ['WebRTC', 'Socket.io', 'Node.js', 'React'],
    featured: false,
  },
  {
    id: 'chess',
    title: 'Real-Time Multiplayer Chess Platform',
    description:
      'Full-stack interactive chess platform featuring real-time WebSocket move validation, match timers, and rating systems.',
    image: '/projects/chess.png',
    github: 'https://github.com/PremRaj99/chess-fronend',
    demo: 'https://chess.premraj.online',
    tags: ['React', 'WebSocket', 'Node.js', 'Tailwind'],
    featured: false,
  },
  {
    id: 'emerginet',
    title: 'EmergiNet Emergency Services Platform',
    description:
      'Location-based emergency dispatch app connecting stranded drivers with nearby towing and repair services in real time.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/EmergiNet-Frontend',
    demo: 'https://emergi-net-frontend.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    featured: false,
  },
  {
    id: 'cyberhunter',
    title: 'Cyber Hunter Portal & Registration System',
    description:
      'Member registration portal, team tracking, and event management dashboard built for club administration.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/Cyber-Hunter-Club-Registration',
    demo: 'https://cyber-hunter-club-registration.vercel.app',
    tags: ['React', 'Node.js', 'Vercel'],
    featured: false,
  },
  {
    id: 'snake',
    title: 'Classic Arcade Canvas Game',
    description:
      'Retro arcade Snake game built with HTML5 canvas, supporting responsive touch controls and high-score records.',
    image: '/projects/snake.png',
    github: 'https://github.com/PremRaj99/snake-game',
    demo: 'https://snake.premraj.online',
    tags: ['React', 'Vite', 'HTML5 Canvas'],
    featured: false,
  },
];

export default function Project() {
  const [showAllSecondary, setShowAllSecondary] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
        <div className="mb-2 flex items-center gap-2">
          <Image
            src={Show_Feast}
            alt="Signature Element"
            className="h-7 w-7 rounded-full border border-white/10 object-cover"
          />
          <span className="font-mono text-xs font-bold tracking-widest text-orange-400 uppercase">
            Portfolio & Products
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-white sm:text-4xl md:text-5xl">
          Featured Work
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-xs text-neutral-400 sm:mt-3 sm:text-base">
          Live applications, WebRTC platforms, and full-stack interactive software I have built.
        </p>
      </div>

      {/* FEATURED SHOWCASES */}
      <div className="flex flex-col gap-10 sm:gap-16 lg:gap-20">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-6 sm:gap-8 lg:gap-12 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Floating Website Preview Canvas */}
              <div className="group relative w-full lg:w-3/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500 group-hover:border-orange-500/40 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]">
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
                    <span className="size-2 rounded-full bg-rose-500/80" />
                    <span className="size-2 rounded-full bg-amber-500/80" />
                    <span className="size-2 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Info */}
              <div className="flex w-full flex-col items-start lg:w-2/5">
                <span className="font-mono text-xs font-bold tracking-widest text-orange-400 uppercase">
                  Featured Project 0{index + 1}
                </span>

                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-1 font-mono text-xs font-medium text-neutral-300 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-bold text-black shadow-md transition-all hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    >
                      <span>Live Website</span>
                      <FiExternalLink size={14} />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/90 px-4 py-2.5 text-xs font-semibold text-neutral-200 transition-all hover:border-neutral-500 hover:bg-neutral-800 hover:text-white"
                  >
                    <FiGithub size={14} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SECONDARY PROJECTS SECTION */}
      <div className="mt-14 sm:mt-20">
        {!showAllSecondary ? (
          <div className="flex flex-col items-center justify-center text-center">
            <button
              type="button"
              onClick={() => setShowAllSecondary(true)}
              className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-orange-500/40 bg-neutral-900/90 px-8 py-4 text-sm font-bold text-orange-400 shadow-xl transition-all duration-300 hover:bg-orange-500 hover:text-black hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] active:scale-95"
            >
              <span>Show More</span>
              <FiChevronDown
                size={20}
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="mb-6 text-center text-xl font-extrabold text-white sm:mb-8 sm:text-2xl">
              More Projects & Labs
            </h3>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-neutral-950/40 transition-all duration-300 hover:border-orange-500/40 hover:bg-neutral-950/80 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
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
                      <h4 className="text-base font-bold text-white transition-colors group-hover:text-orange-300">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-6">
                      {/* Tech Tags */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="rounded border border-neutral-800 bg-neutral-900/90 px-2 py-0.5 font-mono text-[10px] font-medium text-neutral-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 border-t border-neutral-800/80 pt-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-xs font-semibold text-orange-400 transition-colors hover:text-orange-300"
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

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSecondary(false)}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-6 py-3 text-xs font-semibold text-neutral-300 transition-all hover:bg-neutral-800 active:scale-95"
              >
                <span>Show Less</span>
                <FiChevronUp size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
