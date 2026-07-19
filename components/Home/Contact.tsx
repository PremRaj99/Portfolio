'use client';

import Idea_Mind from '@/public/images/Idea_Mind.png';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import Button from '../common/Button';
import Card from '../common/Card';
import Image from 'next/image';

export default function Contact() {
  return (
    <Card className="flex flex-col items-center gap-6 border border-white/10 p-5 sm:gap-8 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-10">
      <div className="flex w-full justify-center lg:w-5/12">
        <Image
          src={Idea_Mind}
          alt="Let's build something great"
          className="w-full max-w-sm rounded-2xl object-cover"
        />
      </div>

      <div className="flex w-full flex-col items-start lg:w-7/12">
        <span className="font-mono text-xs font-bold tracking-widest text-orange-400 uppercase">
          Build Your Product
        </span>

        <h2 className="mt-2 text-xl leading-tight font-extrabold text-white sm:text-3xl lg:text-4xl">
          Want a custom AI SaaS platform or high-converting E-Commerce site?
        </h2>

        <p className="mt-3 max-w-xl text-xs leading-relaxed text-neutral-300 sm:mt-4 sm:text-sm lg:text-base">
          From concept and UI/UX design to AI integration, payment gateways (Stripe, Razorpay),
          subscription billing, and cloud deployment — I turn your project ideas into
          revenue-generating software.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
          <a
            href="https://github.com/PremRaj99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <FiGithub className="text-lg text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/prem-raj99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <FaLinkedinIn className="text-lg text-white" />
          </a>

          <Button
            onClick={() => {
              window.open('https://wa.me/916200103129', '_blank');
            }}
          >
            Get Your Site Built
          </Button>
        </div>
      </div>
    </Card>
  );
}
