"use client";

import { BiArrowBack } from "react-icons/bi";

export default function Button({onClick, children}: {onClick: React.MouseEventHandler<HTMLButtonElement>, children?: React.ReactNode}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative w-fit px-4 py-2 rounded-xl font-medium overflow-hidden group duration-300 cursor-pointer"
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-r from-white/5 via-white/25 to-white/25 animate-border-glow pointer-events-none">
        <div className="w-full h-full bg-black rounded-xl"></div>
      </div>

      {/* Animated text */}
      <span className="relative z-10 bg-gradient-to-r from-white/80 via-white/80 to-white bg-clip-text text-transparent animate-text-glow">
        {children || "Click Me"}
        <BiArrowBack className="hidden text-lg text-white rotate-180 group-hover:inline-block" />
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
