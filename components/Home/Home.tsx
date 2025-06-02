import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import Show_Feast from "@/public/images/Show_Feast.png";
import Skill from "./Skill";

export default function Home() {
  return (
    <div className="overflow-hidden container w-screen">
      <div className="flex items-center my-4">
        <img
          src={Show_Feast.src}
          alt="Show Feast"
          className="w-10 h-10 rounded-full object-cover"
          loading="lazy"
        />
        <h1 className="text-xs font-mono ml-4 px-2 py-1 rounded-full bg-green-500/20 text-green-500">
          🟢 Ready to <span className="line-through">work</span> Rock!
        </h1>
      </div>
      <Hero />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} Prem Raj. All rights reserved.
      </div>
      <div className="text-center text-gray-400 text-sm mb-8">
        Made with ❤️ using Next.js, React, Tailwind CSS, and Frame Motion.
      </div>
    </div>
  );
}
