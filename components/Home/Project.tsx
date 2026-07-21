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
    id: 'physiobuddies',
    title: 'PhysioBuddies — Healthcare SaaS Platform',
    description:
      'A multi-tenant healthcare management platform for physiotherapy clinics to handle online appointment bookings, patient recovery tracking, practitioner schedules, and subscription plans.',
    image: '/projects/physiobuddies.png',
    github: 'https://github.com/PremRaj99/physiobuddies-frontend',
    demo: 'https://physiobuddies-frontend.vercel.app',
    tags: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Express'],
    featured: true,
  },
  {
    id: 'chess',
    title: 'Real-Time Multiplayer Chess Platform',
    description:
      'Full-stack interactive chess platform featuring real-time WebSocket move validation, match timers, player rating systems, and move history tracking.',
    image: '/projects/chess.png',
    github: 'https://github.com/PremRaj99/chess-fronend',
    demo: 'https://chess.premraj.online',
    tags: ['React', 'WebSocket', 'Node.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'yogalife',
    title: 'YogaLife Kolkata — Booking & Storefront',
    description:
      'Studio storefront and class booking portal built with Next.js and Tailwind CSS, integrated with automated class schedules, customer accounts, and online payment gateways.',
    image: '/projects/yogalife.png',
    github: 'https://github.com/PremRaj99/Yogalife-Kolkata',
    demo: 'https://www.yogalifekolkata.com/',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Payment Gateway'],
    featured: true,
  },
  {
    id: 'statai',
    title: 'AI Music & Mood Classification SaaS',
    description:
      'Audio processing engine that analyzes frequency spectrums for automated mood categorization, featuring interactive analytics dashboards and REST API access.',
    image:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/AI-Music-Mood-Classification',
    tags: ['Python', 'Machine Learning', 'Next.js', 'TypeScript', 'REST API'],
    featured: false,
  },
  {
    id: 'videocall',
    title: 'WebRTC Video Call & Real-Time Chat',
    description:
      'Peer-to-peer video conferencing and real-time messaging application built with WebRTC, Socket.io signaling, and React.',
    image: '/projects/videocall.png',
    github: 'https://github.com/PremRaj99/Web-RTC-Video-Call',
    demo: 'https://video.premraj.online',
    tags: ['WebRTC', 'Socket.io', 'Node.js', 'React', 'Express'],
    featured: false,
  },
  {
    id: 'snake',
    title: 'Arcade Canvas Snake Game',
    description:
      'Browser arcade game built with React and HTML5 Canvas, featuring responsive touch controls and persistent high scores.',
    image: '/projects/snake.png',
    github: 'https://github.com/PremRaj99/snake-game',
    demo: 'https://snake.premraj.online',
    tags: ['React', 'Vite', 'TypeScript', 'HTML5 Canvas'],
    featured: false,
  },
  {
    id: 'emerginet',
    title: 'EmergiNet — Emergency Dispatch System',
    description:
      'Location-based dispatch web application connecting motorists with nearby towing and repair services in real time.',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/EmergiNet-Frontend',
    demo: 'https://emergi-net-frontend.vercel.app',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    featured: false,
  },
  {
    id: 'cyberhunter',
    title: 'Cyber Hunter — Event & Member Portal',
    description:
      'Club administration portal for member registration, team tracking, and event management.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
    github: 'https://github.com/PremRaj99/Cyber-Hunter-Club-Registration',
    demo: 'https://cyber-hunter-club-registration.vercel.app',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Vercel'],
    featured: false,
  },
];

export default function Project() {
  const [showAllSecondary, setShowAllSecondary] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured);
  const secondaryProjects = projects.filter((p) => !p.featured);

  return (
    <div className="relative overflow-hidden">
      {/* Section Header */}
      <div className="mb-10 flex flex-col items-center text-center sm:mb-16">
        <div className="mb-2 flex items-center gap-2">
          <Image
            src={Show_Feast}
            alt="Signature Element"
            className="h-6 w-6 rounded-full border border-white/10 object-cover"
          />
          <span className="text-xs font-semibold tracking-wider text-orange-400 uppercase">
            Projects
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-white sm:text-4xl">
          Featured Work & Applications
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-400 sm:mt-3 sm:text-sm">
          A selection of full-stack web applications, real-time tools, and software projects I have
          engineered.
        </p>
      </div>

      {/* FEATURED SHOWCASES */}
      <div className="flex flex-col gap-10 sm:gap-14 lg:gap-18">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className={`flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Floating Website Preview Canvas */}
              <div className="group relative w-full lg:w-3/5">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/60 shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:border-orange-500/40">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Prem Raj Portfolio`}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />

                  {/* Browser Control Accent */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Content Info */}
              <div className="flex w-full flex-col items-start lg:w-2/5">
                <span className="text-xs font-semibold text-orange-400 uppercase">
                  Project 0{index + 1}
                </span>

                <h3 className="mt-1.5 text-xl font-bold text-white sm:text-2xl">{project.title}</h3>

                <p className="mt-2.5 text-xs leading-relaxed text-neutral-300 sm:text-sm">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-md border border-neutral-800 bg-neutral-900/90 px-2.5 py-1 text-xs font-medium text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 text-xs font-semibold text-black transition-all hover:bg-orange-400"
                    >
                      <span>Live Demo</span>
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
      <div className="mt-12 sm:mt-16">
        {!showAllSecondary ? (
          <div className="flex flex-col items-center justify-center text-center">
            <button
              type="button"
              onClick={() => setShowAllSecondary(true)}
              className="group flex cursor-pointer items-center gap-2 rounded-xl border border-orange-500/40 bg-neutral-900/90 px-6 py-3 text-xs font-semibold text-orange-400 transition-all hover:bg-orange-500 hover:text-black active:scale-95"
            >
              <span>View More Projects</span>
              <FiChevronDown
                size={18}
                className="transition-transform duration-200 group-hover:translate-y-0.5"
              />
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="mb-6 text-center text-lg font-bold text-white sm:mb-8 sm:text-xl">
              More Projects & Lab Work
            </h3>

            <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-white/10 bg-neutral-950/40 transition-all hover:border-orange-500/40 hover:bg-neutral-950/80"
                >
                  {/* Image Preview */}
                  <div className="relative aspect-video w-full overflow-hidden bg-black">
                    <Image
                      src={project.image}
                      alt={`${project.title} - Prem Raj`}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Content Body */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div>
                      <h4 className="text-sm font-bold text-white transition-colors group-hover:text-orange-300">
                        {project.title}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-400">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-5">
                      {/* Tech Tags */}
                      <div className="mb-3 flex flex-wrap gap-1.5">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="rounded border border-neutral-800 bg-neutral-900/90 px-2 py-0.5 text-[11px] font-medium text-neutral-400"
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

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAllSecondary(false)}
                className="flex cursor-pointer items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-neutral-300 transition-all hover:bg-neutral-800 active:scale-95"
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
