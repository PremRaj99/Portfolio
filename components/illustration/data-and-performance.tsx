'use client';
import { useState, useEffect, useRef } from 'react';
import Header from './data-and-performance/header'; // Adjust path if needed
import { motion, AnimatePresence } from 'framer-motion';
import { IoReload } from 'react-icons/io5';
import { FaCheckCircle } from 'react-icons/fa';

const BASE_WIDTH = 1024;
const BASE_HEIGHT = BASE_WIDTH * (9 / 16);

export default function DataAndPerformance() {
  const [restartKey, setRestartKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.offsetWidth;
      const newScale = Math.min(parentWidth / BASE_WIDTH, 1);
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col items-center justify-center gap-4 overflow-hidden p-2 text-neutral-200"
    >
      <button
        onClick={() => setRestartKey((prev) => prev + 1)}
        className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-800 px-4 py-2 text-xs font-medium text-white shadow-lg shadow-black/50 transition-transform hover:scale-105 hover:bg-neutral-700 active:scale-95"
      >
        <IoReload />
        Replay Animation
      </button>

      {/* FIX: Changed items-center to items-start below */}
      <div
        className="relative flex w-full items-start justify-center"
        style={{
          height: `${BASE_HEIGHT * scale}px`,
        }}
      >
        {/* Scaled Browser Window */}
        <div
          style={{
            width: `${BASE_WIDTH}px`,
            height: `${BASE_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
            flexShrink: 0,
          }}
          className="relative flex flex-col overflow-hidden rounded-xl border-[12px] border-black shadow-xl shadow-black/60"
        >
          {/* Top Camera/Notch area */}
          <div className="absolute top-0 left-1/2 z-50 flex h-5 w-24 -translate-x-1/2 items-center justify-center gap-2 rounded-b-xl bg-black">
            <div className="size-1.5 rounded-full border border-white/10 bg-neutral-800"></div>
            <div className="size-1.5 rounded-full border border-white/10 bg-neutral-800"></div>
            <div className="size-1.5 rounded-full border border-white/10 bg-neutral-800"></div>
          </div>

          <div className="relative flex h-full w-full flex-col bg-neutral-950">
            {/* Browser Header */}
            <Header setRestartKey={setRestartKey} />

            {/* Content Area - Split Screen */}
            <div
              key={restartKey}
              className="flex flex-1 divide-x-2 divide-neutral-800 overflow-hidden"
            >
              <FastLoadingSide />
              <SlowLoadingSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components for the Split Screen ---

function FastLoadingSide() {
  const [isLoading, setIsLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const targetTime = 0.4;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const current = Date.now();
      const elapsed = (current - startTime) / 1000;

      if (elapsed >= targetTime) {
        setElapsedTime(targetTime);
        setIsLoading(false);
        clearInterval(interval);
      } else {
        setElapsedTime(elapsed);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 flex-col bg-neutral-950">
      <div className="border-b border-neutral-800 bg-green-950/30 px-4 py-2 text-center text-sm font-semibold text-green-400">
        Optimized Loading ({elapsedTime.toFixed(2)}s)
      </div>
      <div className="flex-1 p-6">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SkeletonList key="skeleton-fast" count={4} />
          ) : (
            <DataList key="data-fast" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SlowLoadingSide() {
  const [isLoading, setIsLoading] = useState(true);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const targetTime = 5.2;
    const startTime = Date.now();

    const interval = setInterval(() => {
      const current = Date.now();
      const elapsed = (current - startTime) / 1000;

      if (elapsed >= targetTime) {
        setElapsedTime(targetTime);
        setIsLoading(false);
        clearInterval(interval);
      } else {
        setElapsedTime(elapsed);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-1 flex-col bg-neutral-950">
      <div className="border-b border-neutral-800 bg-red-950/30 px-4 py-2 text-center text-sm font-semibold text-red-400">
        Unoptimized Loading ({elapsedTime.toFixed(2)}s)
      </div>

      {/* Floating Timer Badge */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-neutral-700 bg-neutral-800/90 px-4 py-2 font-mono text-sm font-medium text-white shadow-lg backdrop-blur-md"
        >
          <IoReload className="animate-spin text-neutral-400" />
          {elapsedTime.toFixed(2)}s
        </motion.div>
      )}

      <div className="flex-1 p-6">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <SkeletonList key="skeleton-slow" count={4} />
          ) : (
            <DataList key="data-slow" />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// --- UI Building Blocks ---

function SkeletonList({ count }: { count: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col gap-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 rounded-xl border border-neutral-800/50 bg-neutral-900/30 p-4"
        >
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="size-12 rounded-full bg-neutral-800"
          />
          <div className="flex-1 space-y-3">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
              className="h-4 w-3/4 rounded-md bg-neutral-800"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="h-3 w-1/2 rounded-md bg-neutral-800"
            />
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function DataList() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className="flex flex-col gap-4"
    >
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 300, damping: 24 },
            },
          }}
          className="flex cursor-pointer items-center gap-4 rounded-xl border border-neutral-800 bg-neutral-900 p-4 shadow-sm transition-all hover:border-neutral-700 hover:bg-neutral-800/80"
        >
          <div className="flex size-12 items-center justify-center rounded-full bg-blue-900/40 text-blue-400">
            <FaCheckCircle size={20} />
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-4 w-3/4 rounded-md bg-neutral-300"></div>
            <div className="h-3 w-1/2 rounded-md bg-neutral-600"></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
