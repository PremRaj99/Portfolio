import Contact from './Contact';
import Experience from './Experience';
import Hero from './Hero';
import Project from './Project';
import Show_Feast from '@/public/images/Show_Feast.png';
import Skill from './Skill';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl overflow-hidden">
      <div className="my-4 flex items-center">
        <Image
          src={Show_Feast}
          alt="Show Feast"
          className="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <h1 className="ml-4 rounded-full bg-green-500/20 px-2 py-1 font-mono text-xs text-green-500">
          🟢 Ready to <span className="line-through">work</span> Rock!
        </h1>
      </div>
      <Hero />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Prem Raj. All rights reserved.
      </div>
      <div className="mb-8 text-center text-sm text-gray-400">
        Made with ❤️ using Next.js, React, Tailwind CSS, and Frame Motion.
      </div>
    </div>
  );
}
