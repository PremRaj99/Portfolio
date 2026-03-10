'use client';

import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Button from '../common/Button';
import Card from '../common/Card';
import Show_Yo from '@/public/images/Show_Yo.png';
import Say_Hi from '@/public/images/Say_Hii.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="container my-8 grid grid-cols-12 gap-5 overflow-hidden">
      <Card className={'col-span-12 min-h-fit w-full border md:col-span-8'}>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex gap-2">
            <Image
              src={Show_Yo}
              alt="Prem Raj"
              className="h-10 w-10 rounded-full object-cover"
              loading="lazy"
            />

            <div className="flex flex-col">
              <h1 className="">Hello, I&apos;m Prem Raj</h1>
              <span className="text-xs text-gray-400">Full Stack Developer</span>
            </div>
          </div>
          <div className="flex gap-2">
            <div
              onClick={() => {
                window.open('https://github.com/PremRaj99');
              }}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 transition-colors duration-300 hover:bg-white/5"
            >
              <FiGithub className="text-xl text-white" />
            </div>
            <div
              onClick={() => {
                window.open('https://www.linkedin.com/in/prem-raj99');
              }}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-white/10 transition-colors duration-300 hover:bg-white/5"
            >
              <FaLinkedinIn className="text-xl text-white" />
            </div>

            <Button
              onClick={() => {
                window.location.href = 'https://wa.me/916200103129';
              }}
            >
              {' '}
              Contact me{' '}
            </Button>
          </div>
        </div>
        <h1 className="mt-8 text-3xl font-semibold md:text-4xl">
          I can buid beautiful and functional web solutions for your problems.
        </h1>
        <p className="mt-8 text-gray-400">
          I am a full-stack developer with a passion for creating beautiful and functional web
          applications. I have experience in building web applications using React, Next.js,
          Node.js, Express.js, and MongoDB. I am also proficient in HTML, CSS, and JavaScript.
        </p>
      </Card>
      <Card className="col-span-12 md:col-span-4">
        <Image
          src={Say_Hi}
          alt="Hero Image"
          className="h-full w-full rounded-lg object-cover"
          loading="lazy"
        />
      </Card>
    </div>
  );
}
