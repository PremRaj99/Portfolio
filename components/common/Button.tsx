'use client';

import { BiArrowBack } from 'react-icons/bi';

export default function Button({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-fit cursor-pointer overflow-hidden rounded-xl px-4 py-2 font-medium duration-300"
    >
      {/* Animated border */}
      <div className="animate-border-glow pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-white/25 to-white/25 p-[1px]">
        <div className="h-full w-full rounded-xl bg-black"></div>
      </div>

      {/* Animated text */}
      <span className="animate-text-glow relative z-10 bg-gradient-to-r from-white/80 via-white/80 to-white bg-clip-text text-transparent">
        {children || 'Click Me'}
        <BiArrowBack className="hidden rotate-180 text-lg text-white group-hover:inline-block" />
      </span>

      <style jsx>{`
        @keyframes border-glow {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        @keyframes text-glow {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: -100% 0;
          }
        }

        .animate-border-glow {
          animation: border-glow 5s ease-in-out infinite;
          background-size: 200% 100%;
        }

        .animate-text-glow {
          animation: text-glow 5s ease-in-out infinite;
          background-size: 200% 100%;
        }
      `}</style>
    </button>
  );
}
