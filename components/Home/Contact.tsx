'use client';

import Idea_Mind from '@/public/images/Idea_Mind.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Button from '../common/Button';
import Card from '../common/Card';
import Image from 'next/image';

export default function Contact() {
  return (
    <Card className={'my-8 flex min-h-fit w-full flex-col justify-center gap-4 border md:flex-row'}>
      <div className="flex justify-between md:items-center">
        <Image src={Idea_Mind} alt="" className="w-96" />
      </div>
      <div className="">
        <h1 className="mt-8 max-w-[30ch] text-3xl font-semibold md:text-3xl">
          I don&apos;t just build websites — I craft complete solutions for your business.
        </h1>
        <p className="my-4 max-w-[60ch] text-gray-400">
          Upgrade your online presence with robust, scalable, and user-focused web applications.
          Whether it&apos;s boosting performance, enhancing user experience, or increasing
          conversions — we&apos;ll build a digital solution tailored to your needs, not just a
          pretty interface.
        </p>
        <div className="flex gap-2 py-4">
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
              window.open('https://wa.me/916200103129');
            }}
          >
            {' '}
            Contact me{' '}
          </Button>
        </div>
      </div>
    </Card>
  );
}
