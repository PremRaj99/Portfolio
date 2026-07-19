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
    <div className="grid grid-cols-12 items-stretch gap-6">
      <Card className="col-span-12 flex flex-col justify-between border border-white/10 p-6 sm:p-8 md:col-span-8">
        <div>
          {/* Header row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={Show_Yo}
                alt="Prem Raj"
                className="h-11 w-11 rounded-full border border-white/10 object-cover"
                loading="lazy"
              />
              <div className="flex flex-col">
                <h2 className="text-base font-bold text-white">Prem Raj</h2>
                <span className="font-mono text-xs text-orange-400">
                  AI SaaS & E-Commerce Architect
                </span>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="flex items-center gap-2">
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
                  window.location.href = 'https://wa.me/916200103129';
                }}
              >
                Build My Site
              </Button>
            </div>
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-2xl leading-tight font-extrabold text-white sm:text-3xl lg:text-4xl">
            I build production-ready <span className="text-orange-400">AI SaaS</span> platforms &
            high-converting <span className="text-orange-400">E-Commerce</span> stores.
          </h1>

          {/* Concise Bio */}
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-neutral-300 sm:text-base">
            Helping startups, business owners, and founders turn ideas into scalable digital
            products. Specialized in custom AI workflows, payment-integrated online stores,
            subscription billing, and lightning-fast web applications.
          </p>
        </div>
      </Card>

      <Card className="col-span-12 flex items-center justify-center overflow-hidden p-0 md:col-span-4">
        <Image
          src={Say_Hi}
          alt="Prem Raj Portrait"
          className="h-full min-h-[260px] w-full object-cover"
          loading="lazy"
        />
      </Card>
    </div>
  );
}
