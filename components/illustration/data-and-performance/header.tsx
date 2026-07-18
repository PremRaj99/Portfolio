import type { Dispatch, SetStateAction } from 'react';
import { BsThreeDotsVertical, BsLockFill } from 'react-icons/bs';
import { FaRegArrowAltCircleDown } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { IoApps, IoReload } from 'react-icons/io5';
import { RxAvatar } from 'react-icons/rx';

export default function Header({
  setRestartKey,
}: {
  setRestartKey: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div className="flex h-16 flex-col justify-between bg-neutral-900/90 backdrop-blur-md">
      {/* Window Controls & Title Bar */}
      <div className="flex h-6 items-center justify-between px-3 pt-1.5">
        <div className="flex items-center gap-1.5">
          <div className="size-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/30"></div>
          <div className="size-3 rounded-full bg-amber-500/90 shadow-sm shadow-amber-500/30"></div>
          <div className="size-3 rounded-full bg-emerald-500/90 shadow-sm shadow-emerald-500/30"></div>
        </div>
        <div className="font-mono text-[10px] tracking-wider text-neutral-400">
          Data & Performance Benchmark Lab
        </div>
        <div className="w-12"></div>
      </div>

      {/* URL Bar & Action Toolbar */}
      <div className="flex h-9 items-center gap-1.5 border-y border-neutral-800 bg-neutral-950/80 px-2 text-xs">
        <div className="flex items-center gap-0.5 text-neutral-400">
          <button
            aria-label="Back"
            className="rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <IoIosArrowBack size={14} />
          </button>
          <button
            aria-label="Forward"
            className="rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <IoIosArrowForward size={14} />
          </button>
          <button
            onClick={() => setRestartKey((prev) => prev + 1)}
            title="Replay Performance Benchmark"
            className="flex cursor-pointer items-center gap-1 rounded border border-emerald-800/50 bg-emerald-950/60 px-2 py-0.5 text-[11px] font-medium text-emerald-400 transition-colors hover:bg-emerald-900/60"
          >
            <IoReload size={12} className="animate-spin-once" />
            <span>Replay</span>
          </button>
        </div>

        {/* URL Input */}
        <div className="flex flex-1 items-center gap-2 rounded-md border border-neutral-800/80 bg-neutral-900/90 px-2.5 py-1 text-neutral-400">
          <BsLockFill size={11} className="shrink-0 text-emerald-500" />
          <span className="truncate font-mono text-[11px] text-neutral-300">
            https://api.system.io/v1/analytics/performance-benchmark
          </span>
          <span className="ml-auto shrink-0 rounded border border-emerald-500/20 bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-emerald-400">
            200 OK (14ms)
          </span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 text-neutral-400">
          <button
            aria-label="Apps"
            className="rounded p-1 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <IoApps size={14} />
          </button>
          <button
            aria-label="Downloads"
            className="rounded p-1 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <FaRegArrowAltCircleDown size={13} />
          </button>
          <button
            aria-label="User Avatar"
            className="rounded p-1 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <RxAvatar size={14} />
          </button>
          <button
            aria-label="Menu"
            className="rounded p-1 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
          >
            <BsThreeDotsVertical size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
