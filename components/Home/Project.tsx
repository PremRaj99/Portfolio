import React from "react";
import Card from "../common/Card";
import Button from "../common/Button";
import Show_Yo from "@/public/images/Show_Yo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";

export default function Project() {
  const Projects = [
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description: "This is a description of project 3.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project3",
    },
    {
      title: "Project 1",
      description: "This is a description of project 1.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "This is a description of project 2.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description: "This is a description of project 3.",
      image:
        "https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div className="my-8 container overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-white pb-8">
        My Projects
      </h1>
      <div className="grid md:grid-cols-3 gap-4">
        {Projects.map((project, index) => (
          <Card key={index} className="mb-6 !p-6">
            <div className="flex group items-center gap-4 hover:scale-[1.03] transition-transform duration-300 relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-3xl object-cover group-hover:brightness-30 brightness-100 transition-all duration-300"
                loading="lazy"
              />
              <div className="flex flex-col gap-2 absolute -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 left-0 right-0 p-4 bg-black/50 rounded-3xl">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-gray-400 text-xs">{project.description}</p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-pointer">
                    <FiGithub className="text-white" />
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300 cursor-pointer">
                    <MdLiveTv className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
