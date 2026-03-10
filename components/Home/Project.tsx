import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { MdLiveTv } from 'react-icons/md';
import Card from '../common/Card';

export default function Project() {
  const Projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'This is a description of project 3.',
      image:
        'https://cdn.dribbble.com/userupload/18206795/file/original-93912536ac2c42edae170479dc4828ea.png?resize=400x0',
      link: 'https://example.com/project3',
    },
  ];

  return (
    <div className="container my-8 overflow-hidden">
      <h1 className="pb-8 text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
        My Projects
      </h1>
      <div className="grid gap-4 md:grid-cols-3">
        {Projects.map((project, index) => (
          <Card key={index} className="mb-6 !p-6">
            <div className="group relative flex items-center gap-4 transition-transform duration-300 hover:scale-[1.03]">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full rounded-3xl object-cover brightness-100 transition-all duration-300 group-hover:brightness-30"
                loading="lazy"
                unoptimized
              />
              <div className="pointer-events-none absolute right-0 -bottom-10 left-0 flex flex-col gap-2 rounded-3xl bg-black/50 p-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:bottom-0 group-hover:opacity-100">
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="text-xs text-gray-400">{project.description}</p>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border border-white/10 transition-colors duration-300 hover:bg-white/5">
                    <FiGithub className="text-white" />
                  </div>
                  <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border border-white/10 transition-colors duration-300 hover:bg-white/5">
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
