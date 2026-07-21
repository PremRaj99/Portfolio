'use client';

import { useState } from 'react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiMail, FiCopy, FiCheck, FiSend } from 'react-icons/fi';
import Card from '../common/Card';

export default function Contact() {
  const emailAddress = 'web.premraj@gmail.com';
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI SaaS',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', projectType: 'AI SaaS', message: '' });
    }, 4000);
  };

  return (
    <Card className="relative overflow-hidden border border-orange-500/30 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black p-6 sm:p-10 lg:p-12">
      {/* Background Ambient Glow Accent */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        {/* Left Column: Context & Direct Contact Shortcuts */}
        <div className="flex w-full flex-col lg:w-5/12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <h2 className="mt-4 text-2xl leading-tight font-extrabold text-white sm:text-4xl">
            Let&apos;s Build Your Next Engineering System
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-neutral-300 sm:text-sm">
            Have a project in mind, an AI SaaS idea, or need a full-stack engineer for
            microservices, payment integrations, or high-performance web apps? Send a message below
            or email directly.
          </p>

          {/* High-Contrast Direct Email Pill & Copy CTA */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-orange-500/30 bg-neutral-900/90 p-2.5 shadow-xl sm:flex-nowrap">
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20Prem%20Raj`}
                className="flex items-center gap-2.5 truncate font-mono text-xs font-bold text-orange-400 transition-colors hover:text-orange-300 sm:text-sm"
              >
                <FiMail size={16} className="shrink-0 text-orange-400" />
                <span className="truncate">{emailAddress}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="ml-auto flex cursor-pointer items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-neutral-200 transition-all hover:bg-orange-500 hover:text-black active:scale-95"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <FiCheck size={14} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <a
              href={`mailto:${emailAddress}?subject=Project%20Inquiry%20-%20Prem%20Raj`}
              className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-xs font-extrabold tracking-wider text-black uppercase shadow-[0_0_25px_rgba(249,115,22,0.35)] transition-all hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] active:scale-95 sm:text-sm"
            >
              <FiMail size={16} />
              <span>Send Direct Email</span>
            </a>
          </div>

          {/* Quick Communication Channels */}
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://wa.me/916200103129"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Direct Chat"
              className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-semibold text-emerald-400 transition-all hover:bg-emerald-500/20"
            >
              <FaWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://github.com/PremRaj99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FiGithub size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/premraj99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neutral-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="flex w-full flex-col lg:w-6/12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md sm:p-6"
          >
            <h3 className="text-base font-bold text-white sm:text-lg">Send a Direct Message</h3>

            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <FiCheck size={24} />
                </div>
                <h4 className="mt-3 text-base font-bold text-white">Message Received!</h4>
                <p className="mt-1 text-xs text-neutral-300">
                  Thanks for reaching out! Prem will reply to your email shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-[11px] font-semibold text-neutral-400 uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="rounded-xl border border-white/10 bg-neutral-900/90 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors outline-none focus:border-orange-500/60"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-[11px] font-semibold text-neutral-400 uppercase"
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-xl border border-white/10 bg-neutral-900/90 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors outline-none focus:border-orange-500/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-project"
                    className="font-mono text-[11px] font-semibold text-neutral-400 uppercase"
                  >
                    Project Domain
                  </label>
                  <select
                    id="contact-project"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="rounded-xl border border-white/10 bg-neutral-900/90 px-3.5 py-2.5 text-xs text-neutral-200 transition-colors outline-none focus:border-orange-500/60"
                  >
                    <option value="AI SaaS">AI SaaS & Machine Learning</option>
                    <option value="Full Stack App">Full Stack Web App / Microservices</option>
                    <option value="E-Commerce & Payments">E-Commerce & Payment Gateways</option>
                    <option value="Consulting / Role">Engineering Role / Advisory</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[11px] font-semibold text-neutral-400 uppercase"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="rounded-xl border border-white/10 bg-neutral-900/90 px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 transition-colors outline-none focus:border-orange-500/60"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-xs font-bold text-white transition-all hover:bg-orange-500 hover:text-black active:scale-95"
                >
                  <FiSend size={14} />
                  <span>Submit Inquiry</span>
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </Card>
  );
}
